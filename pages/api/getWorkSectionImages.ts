import { ListObjectsCommand, S3Client } from "@aws-sdk/client-s3";
import { NextApiRequest, NextApiResponse } from "next";

const s3Client = (() => {
    let s3Client;
    try {
        s3Client = new S3Client({
            region: process.env.AWS_REGION ?? "",
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? "",
                secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET ?? "",
            },
        });
    } catch (error) {
        console.error("Error creating s3 client", error);
    }
    return s3Client;
})();

const handler = async (req: NextApiRequest, res: NextApiResponse<{ photos: string[] }>) => {
    if (!s3Client) {
        return res.status(500).json({
            photos: [],
        });
    }
    let photos: string[] = [];

    const command = new ListObjectsCommand({
        Bucket: process.env.AWS_BUCKET_NAME ?? "",
        Prefix: process.env.MY_WORKS_FOLDER_PREFIX ?? "",
    });
    try {
        const response = await s3Client.send(command);
        photos =
            response.Contents?.filter((content) => content.Size ?? 0 > 0).map((content) =>
                content.Key ? `${process.env.AWS_S3_BUCKET_PREFIX}${content.Key}` : ""
            ) ?? [];
        return res.status(200).json({
            photos,
        });
    } catch (error) {
        console.error("Error listing objects", error);
        return res.status(500).json({
            photos,
        });
    }
};

export default handler;
