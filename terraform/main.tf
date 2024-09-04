
resource "aws_s3_object" "upload-build-file" {
    for_each        = fileset("../../my_web_page/build/", "**")

    bucket          = var.static_bucket_name
    key             = each.value
    source          = "../../my_web_page/build/"
    etag            = filemd5("../../my_web_page/build/${each.value}")
    acl             = "public-read"
}
