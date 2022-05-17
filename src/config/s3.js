const s3Config = {
  bucketName: process.env.REACT_APP_S3_BUCKET_NAME,
  region: process.env.REACT_APP_S3_REGION,
  accessKeyId: process.env.REACT_APP_S3_ACCESS_ID,
  secretAccessKey: process.env.REACT_APP_S3_ACCESS_KEY,
};

module.exports = s3Config;
