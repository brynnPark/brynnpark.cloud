
resource "aws_s3_object" "upload-build-file" {
    for_each        = fileset("../my_web_page/build/static", "**")

    bucket          = var.static_bucket_name
    key             = each.value
    source          = "../my_web_page/build/static/${each.value}"
    etag            = filemd5("../my_web_page/build/static/${each.value}")
    acl             = "public-read"
}
