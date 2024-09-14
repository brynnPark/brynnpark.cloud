resource "aws_s3_bucket" "my-web-page" {
  bucket = "${var.static_bucket_name}"
}

resource "aws_s3_bucket_ownership_controls" "my-web-page" {
  bucket = "${var.static_bucket_name}"
  rule {
  object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_public_access_block" "my-web-page" {
  bucket = "${var.static_bucket_name}"
  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_acl" "my-web-page" {
  depends_on = [
    aws_s3_bucket_ownership_controls.my-web-page,
    aws_s3_bucket_public_access_block.my-web-page,
  ]

  bucket = "${var.static_bucket_name}"
  acl    = "public-read"
}

resource "aws_s3_bucket_website_configuration" "website-config" {
  bucket = "${var.static_bucket_name}"

  index_document {
  suffix = "index.html"
  }

  error_document {
  key = "error.html"
  }
}

resource "aws_s3_bucket_policy" "bucket-policy" {
  bucket = "${var.static_bucket_name}"
  policy = jsonencode({
    "Version": "2012-10-17",
    "Statement": [{
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": ["s3:GetObject","s3:PutObject","s3:DeleteObject"]
            "Resource": "arn:aws:s3:::brynnpark.cloud/*"
        }]
    })

  depends_on = [
  aws_s3_bucket_public_access_block.my-web-page
  ]
}

