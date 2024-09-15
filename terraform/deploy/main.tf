provider "aws" {
  region = "ap-northeast-2"
}

# resource "aws_s3_bucket" "my-web-page" {
#   bucket = "${var.static_bucket_name}"
# }

# resource "aws_s3_bucket_ownership_controls" "my-web-page" {
#   bucket = "${var.static_bucket_name}"
#   rule {
#   object_ownership = "BucketOwnerPreferred"
#   }
#   depends_on = [aws_s3_bucket.my-web-page]
# }
 
# resource "aws_s3_bucket_public_access_block" "my-web-page" {
#   bucket = "${var.static_bucket_name}"
#   block_public_acls       = false
#   block_public_policy     = false
#   ignore_public_acls      = false
#   restrict_public_buckets = false
# }

# resource "aws_s3_bucket_acl" "my-web-page" {
#   depends_on = [
#     aws_s3_bucket_ownership_controls.my-web-page,
#     aws_s3_bucket_public_access_block.my-web-page,
#   ]

#   bucket = "${var.static_bucket_name}"
#   acl    = "public-read"
# }

# resource "aws_s3_bucket_website_configuration" "website-config" {
#   bucket = "${var.static_bucket_name}"

#   index_document {
#   suffix = "index.html"
#   }

#   error_document {
#   key = "index.html"
#   }
# }

# resource "aws_s3_bucket_policy" "bucket-policy" {
#   bucket = "${var.static_bucket_name}"
#   policy = jsonencode({
#     "Version": "2012-10-17",
#     "Statement": [{
#             "Sid": "PublicReadGetObject",
#             "Effect": "Allow",
#             "Principal": "*",
#             "Action": ["s3:GetObject","s3:PutObject", "S3:DeleteObject"]
#             "Resource": "arn:aws:s3:::brynnpark.cloud/*"
#         }]
#     })

#   depends_on = [
#   aws_s3_bucket_public_access_block.my-web-page
#   ]
# }

provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"
}

// We want AWS to host our zone so its nameservers can point to our CloudFront
// distribution.
resource "aws_route53_zone" "zone" {
  name = "${var.root_domain_name}"
}


resource "aws_acm_certificate" "certificate" {
  // We want a wildcard cert so we can host subdomains later.
  provider          = aws.us_east_1
  domain_name       = "${var.root_domain_name}"
  validation_method = "DNS"

  // We also want the cert to be valid for the root domain even though we'll be
  // redirecting to the www. domain immediately.
  subject_alternative_names = ["*.${var.root_domain_name}"]

    lifecycle {
    create_before_destroy = true
  }
}


resource "aws_route53_record" "validation" {
  allow_overwrite = true
  for_each   = { for dvo in aws_acm_certificate.certificate.domain_validation_options : dvo.domain_name => {
    name     = dvo.resource_record_name
    type     = dvo.resource_record_type
    record   = dvo.resource_record_value
  } }

  name       = each.value.name
  type       = each.value.type
  records    = [each.value.record]
  ttl        = 60
  zone_id  = aws_route53_zone.zone.id
}

resource "aws_cloudfront_distribution" "www_distribution" {
  // origin is where CloudFront gets its content from.
  origin {
    // We need to set up a "custom" origin because otherwise CloudFront won't
    // redirect traffic from the root domain to the www domain, that is from
    // runatlantis.io to www.runatlantis.io.
    custom_origin_config {
      // These are all the defaults.
      http_port              = "80"
      https_port             = "443"
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["TLSv1", "TLSv1.1", "TLSv1.2"]
    }

    // Here we're using our S3 bucket's URL!
    domain_name = "brynnpark.cloud.s3-website.ap-northeast-2.amazonaws.com" // "${aws_s3_bucket.my-web-page.website_endpoint}"
    // This can be any name to identify this origin.
    origin_id   = "${var.www_domain_name}"
  }

  enabled             = true
  default_root_object = "index.html"

  // All values are defaults from the AWS console.
  default_cache_behavior {
    viewer_protocol_policy = "redirect-to-https"
    compress               = true
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    // This needs to match the `origin_id` above.
    target_origin_id       = "${var.www_domain_name}"
    min_ttl                = 0
    default_ttl            = 86400
    max_ttl                = 31536000

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }
  }

  // Here we're ensuring we can hit this distribution using www.runatlantis.io
  // rather than the domain name CloudFront gives us.
  aliases = [var.root_domain_name, "${var.www_domain_name}"]

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  // Here's where our certificate is loaded in!
  viewer_certificate {
    acm_certificate_arn = "${aws_acm_certificate.certificate.arn}"
    ssl_support_method  = "sni-only"
  }
}

// This Route53 record will point at our CloudFront distribution.
resource "aws_route53_record" "www" {
  zone_id = "${aws_route53_zone.zone.id}"
  name    = "${var.www_domain_name}"
  type    = "A"

    alias {
    name                   = aws_cloudfront_distribution.www_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.www_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}