
resource "aws_s3_object" "upload-build-file" {
    #for_each        = fileset("../my_web_page/build/", "*.html")

    bucket          = var.static_bucket_name
    key             = "package.json"
    source          = "../my_web_page/package.json"
    #etag            = filemd5("../my_web_page/build/${each.value}")
    acl             = "public-read"
}
