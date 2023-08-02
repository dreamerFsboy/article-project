import Ably from "ably/promises";
import type { VercelRequest, VercelResponse } from '@vercel/node';
export default async function handler(req:VercelRequest, res:VercelResponse) {
  const client = new Ably.Realtime(process.env.ABLY_API_KEY as string);
  const tokenRequestData = await client.auth.createTokenRequest({
    clientId: "story-talk" + req.query['id'],
  });
  res.status(200).json(tokenRequestData);
}