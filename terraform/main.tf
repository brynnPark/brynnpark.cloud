
resource "aws_s3_object" "upload-build-file" {
    #for_each        = fileset("../my_web_page/build/", "**")

    bucket          = var.static_bucket_name
    key             = "index.html"
    source          = "../my_web_page/build/index.html"
    #etag            = filemd5("../my_web_page/public/${each.value}")
    acl             = "public-read"
}
