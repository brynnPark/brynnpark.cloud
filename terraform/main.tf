
resource "aws_s3_object" "upload-build-file" {
    for_each        = fileset("/Users/pbh7080/Desktop/my-web-page/my_web_page/build/", "**/*.*")

    bucket          = var.static_bucket_name
    key             = each.value
    source          = "/Users/pbh7080/Desktop/my-web-page/my_web_page/build/${each.value}"
    etag            = filemd5("/Users/pbh7080/Desktop/my-web-page/my_web_page/build/${each.value}")
    acl             = "public-read"
}

output "files_in_build_directory" {
  value = fileset("/Users/pbh7080/Desktop/my-web-page/my_web_page/build/", "**/*.*")
}