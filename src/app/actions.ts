/* eslint-disable @typescript-eslint/no-non-null-assertion */
'use server'

import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

import crypto from 'crypto'

const s3 = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_REGION!,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
})

const generateFileName = (bytes = 32) => {
  return crypto.randomBytes(bytes).toString('hex')
}
const acceptedImageTypes = ['image/jpeg', 'image/png', 'image/webp']

export async function getSignedURL(imageType: string, userKey: string) {
  if (!acceptedImageTypes.includes(imageType)) {
    return { failure: 'Tipo de Input Inválido' }
  }

  const putObjCommand = new PutObjectCommand({
    Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET!,
    Key: generateFileName(),
    ContentType: imageType,
    Metadata: {
      userKey,
    },
  })

  const signedUrl = await getSignedUrl(s3, putObjCommand, {
    expiresIn: 60, // seconds
  })

  return { success: { url: signedUrl } }
}
