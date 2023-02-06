# Bravetogether-Frontend

Sexual Harrassment has no place in our world but is still a common issue in a woman's life. Share your experience and I analyze the outcome to fight against it in unity.

## Development

### Setup AWS CLI

Follow installation instructions here: https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html.

### Configure AWS CLI

Run the command

```sh
aws configure
```

Login to the AWS console using the root account and create an IAM user for your computer. Copy and paste the Access Key ID and the Secret Access Key when prompted in the terminal. Choose profile `default`.

### Manual deployment

Make sure you installed all packages.

```sh
npm install
```

Deploy to S3.

```sh
npm run build && aws s3 sync --delete build/ s3://bravetogether
```

If you want to make the changes visisble immediatly, you can create a CloudFront cache invalidation:

```sh
aws cloudfront create-invalidation --distribution-id="E2TMRPZ042OI50" --paths="/*"
```
