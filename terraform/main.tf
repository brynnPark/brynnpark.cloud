
resource "aws_s3_object" "upload-build-file" {
    for_each        = fileset("../my_web_page/build/", "*.html")

    bucket          = var.static_bucket_name
    key             = each.value
    content_type = "text/html"
    source          = "../my_web_page/build/${each.value}"
    etag            = filemd5("../my_web_page/build/${each.value}")
    acl             = "public-read"
}
