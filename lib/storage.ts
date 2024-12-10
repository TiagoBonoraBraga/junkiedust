import { S3 } from "@aws-sdk/client-s3";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { Readable } from "stream";

const accessKeyId = process.env.SPACES_KEY;
const secretAccessKey = process.env.SPACES_SECRET;
const bucketName = process.env.SPACES_BUCKET;
const endpoint = process.env.SPACES_ENDPOINT;

if (!accessKeyId || !secretAccessKey || !bucketName || !endpoint) {
  throw new Error("Missing S3 credentials");
}
interface UploadOptionsBasic {
  create?: boolean;
  replace?: boolean;
  expire?: string;
  expireDate?: Date;
}

const s3Client = new S3({
  forcePathStyle: false, // Configures to use subdomain/virtual calling format.
  endpoint: endpoint,
  region: "us-east-1",
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

interface PutParams {
  Key: string;
  Body: Buffer | Uint8Array | Blob | string | Readable;
  ContentType?: string;
}

export const put = async (params: PutParams) => {
  try {
    const command = new PutObjectCommand({ Bucket: bucketName, ...params });
    const response = await s3Client.send(command);
    const url = `https://${bucketName}.nyc3.digitaloceanspaces.com/${params.Key}`;
    console.log(url);
    console.log(response);
    return { url };
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
};
