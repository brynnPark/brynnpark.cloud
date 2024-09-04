resource "aws_s3_bucket" "my-web-page" {
  bucket = "${var.static_bucket_name}"
}

resource "aws_s3_bucket_ownership_controls" "my-web-page" {
  bucket = aws_s3_bucket.my-web-page.id
  rule {
  object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_public_access_block" "my-web-page" {
  bucket = aws_s3_bucket.my-web-page.id

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

  bucket = aws_s3_bucket.my-web-page.id
  acl    = "public-read"
}

resource "aws_s3_bucket_website_configuration" "website-config" {
  bucket = aws_s3_bucket.my-web-page.id

  index_document {
  suffix = "index.html"
  }

  error_document {
  key = "index.html"
  }
}

resource "aws_s3_bucket_policy" "bucket-policy" {
  bucket = aws_s3_bucket.my-web-page.id

  policy = jsonencode({
    "Version": "2012-10-17",
    "Statement": [{
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::brynnpark.cloud/*"
        }]
    })

  depends_on = [
  aws_s3_bucket_public_access_block.my-web-page
  ]
}

resource "aws_s3_object" "upload-build-file" {
    for_each        = fileset("my_web_page/build/", "*")

    bucket          = var.static_bucket_name
    key             = each.value
    source          = "my_web_page/build/${each.value}"
    etag            = filemd5("my_web_page/build/${each.value}")
    acl             = "public-read"
}

resource "aws_s3_object" "upload-index-html" {
    for_each        = fileset("my_web_page/public/", "*.html")

    bucket          = var.static_bucket_name
    key             = each.value
    source          = "my_web_page/public/${each.value}"
    content_type    = "html"
    etag            = filemd5("my_web_page/public/${each.value}")
    acl             = "public-read"
}

resource "aws_s3_object" "object-upload-jpg" {
    for_each        = fileset("my_web_page/public/", "*.jpg")
    bucket          = var.static_bucket_name
    key             = each.value
    content_type    = "image/jpg"
    source          = "my_web_page/public/${each.value}"
    etag            = filemd5("my_web_page/public/${each.value}")
    acl             = "public-read"
}