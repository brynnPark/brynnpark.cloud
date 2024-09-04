resource "aws_s3_bucket" "my-web-page" {
    bucket = var.static_bucket_name
}

