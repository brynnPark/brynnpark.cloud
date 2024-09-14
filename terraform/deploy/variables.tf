# Project Specific Variables
variable "static_bucket_name" {
  type        = string
  description = "The name of S3 bucket for static website hosting"
  default = "brynnpark.cloud"
}

// Create a variable for our domain name because we'll be using it a lot.
variable "www_domain_name" {
  default = "*.brynnpark.cloud"
}

variable "root_domain_name" {
  default = "brynnpark.cloud"
}

