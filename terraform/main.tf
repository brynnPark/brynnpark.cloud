
resource "aws_s3_object" "upload-build-file" {
    for_each        = fileset("../my_web_page/public/", "**")

    bucket          = var.static_bucket_name
    key             = each.value
    source          = "../my_web_page/public/${each.value}"
    etag            = filemd5("../my_web_page/public/${each.value}")
    acl             = "public-read"
}

output "files_in_build_directory" {
  value = fileset("../my_web_page/public/", "**")
}