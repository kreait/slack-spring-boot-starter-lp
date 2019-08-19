workflow "Build and Publish" {
  on = "push"
  resolves = ["upload","Configure Website Bucket"]
}

# install with yarn
action "install" {
  needs = "Only Master"
  uses = "actions/npm@1.0.0"
  runs = "yarn"
  args = "install"
}

# build with yarn
action "build" {
  needs = "install"
  uses = "actions/npm@1.0.0"
  runs = "yarn"
  args = "build"
}

action "Only Master" {
  uses = "actions/bin/filter@b2bea0749eed6beb495a8fa194c071847af60ea1"
  args = "branch master"
}

action "upload" {
  needs = ["build", "Only Master"]
  uses = "actions/aws/cli@master"
  args = "s3 sync ./dist s3://slack-spring-boot.io --region eu-central-1"

  secrets = [
    "AWS_ACCESS_KEY_ID",
    "AWS_SECRET_ACCESS_KEY"
  ]
}

action "Configure Website Bucket" {
  needs = ["Only Master"]
  uses = "actions/aws/cli@master"
  args = "s3 website s3://slack-spring-boot.io --region eu-central-1 --index-document index.html"

  secrets = [
    "AWS_ACCESS_KEY_ID",
    "AWS_SECRET_ACCESS_KEY"
  ]
}
