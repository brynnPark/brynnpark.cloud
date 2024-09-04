
resource "aws_s3_object" "upload-build-file" {
    for_each        = fileset("../my_web_page/build/", "*")

    bucket          = var.static_bucket_name
    key             = each.value
    source          = "../my_web_page/build/${each.value}"
    etag            = filemd5("../my_web_page/build/${each.value}")
    acl             = "public-read"
}

resource "aws_s3_object" "upload-index-html" {
    for_each        = fileset("../my_web_page/public/", "*.html")

    bucket          = var.static_bucket_name
    key             = each.value
    source          = "../my_web_page/public/${each.value}"
    content_type    = "text/html"
    etag            = filemd5("../my_web_page/public/${each.value}")
    acl             = "public-read"
}

resource "aws_s3_object" "upload-src-file" {
    for_each        = fileset("../my_web_page/src/", "*")

    bucket          = var.static_bucket_name
    key             = each.value
    source          = "../my_web_page/src/${each.value}"
    etag            = filemd5("../my_web_page/src/${each.value}")
    acl             = "public-read"
}

resource "aws_s3_object" "object-upload-jpg" {
    for_each        = fileset("../my_web_page/public/", "*.jpg")

    bucket          = var.static_bucket_name
    key             = each.value
    content_type    = "image/jpg"
    source          = "../my_web_page/public/${each.value}"
    etag            = filemd5("../my_web_page/public/${each.value}")
    acl             = "public-read"
}
