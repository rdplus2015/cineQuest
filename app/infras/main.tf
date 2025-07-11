provider "aws" {
  region = "us-east-2"
}

resource "aws_s3_bucket" "site" {
  bucket        = "cinequest-tf"
  force_destroy = true
}

resource "aws_s3_bucket_public_access_block" "site" {
  bucket = aws_s3_bucket.site.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}


resource "aws_cloudfront_origin_access_control" "oac" {
  name                              = "cinequest-tf-oac"
  description                       = "Access control for CloudFront to S3"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_cloudfront_distribution" "cdn" {
  enabled = true
  # default_root_object = "index.html"

  tags = {
    Name        = "cineQuest-tf"
    Environment = "production"
    Description = "Distribution pour le site React CineQuest via CloudFront"
  }

  origin {
    domain_name = aws_s3_bucket.site.bucket_regional_domain_name
    origin_id   = "cinequest-origin"

    origin_access_control_id = aws_cloudfront_origin_access_control.oac.id
  }

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "cinequest-origin"

    viewer_protocol_policy = "redirect-to-https"

    forwarded_values {
      query_string = true

      cookies {
        forward = "none"
      }
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }

  custom_error_response {
    error_code         = 404
    response_code      = 200
    response_page_path = "/index.html"
  }

  custom_error_response {
    error_code         = 403
    response_code      = 200
    response_page_path = "/index.html"
  }
}

#  private policy  : only cloudfront can read files
resource "aws_s3_bucket_policy" "allow_cloudfront_only" {
  bucket = aws_s3_bucket.site.id

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Sid : "AllowCloudFrontReadAccess",
        Effect : "Allow",
        Principal : {
          Service : "cloudfront.amazonaws.com"
        },
        Action : "s3:GetObject",
        Resource : "${aws_s3_bucket.site.arn}/*",
        Condition : {
          StringEquals : {
            "AWS:SourceArn" : aws_cloudfront_distribution.cdn.arn
          }
        }
      }
    ]
  })
}

# print the url in the CLI
output "cloudfront_url" {
  value = "https://${aws_cloudfront_distribution.cdn.domain_name}"
}

