locals {
  content_type_map = {
   "js" = "application/json"
   "html" = "text/html"
   "css"  = "text/css"
  }
}


resource "aws_s3_object" "upload-build-file" {
    for_each        = fileset("../my_web_page/build/", "**")

    bucket          = "${var.static_bucket_name}"
    key             = each.value
    source          = "../my_web_page/build/${each.value}"
    # etag            = filemd5("../my_web_page/build/${each.value}")

    content_type = lookup({
    "html" = "text/html",
    "css"  = "text/css",
    "js"   = "application/json",
    "png"  = "image/png",
    "jpg"  = "image/jpeg",
    "jpeg" = "image/jpeg",
    "gif"  = "image/gif",
    "svg"  = "image/svg+xml",
    "ico"  = "image/x-icon"
  }, split(".", each.value)[length(split(".", each.value)) - 1], "application/octet-stream")
}