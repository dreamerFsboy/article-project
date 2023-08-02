import Ably from "ably/promises";
import type { VercelRequest, VercelResponse } from '@vercel/node';
export default async function handler(req:VercelRequest, res:VercelResponse) {
  // const client = new Ably.Realtime(process.env.ABLY_API_KEY as string);
  const client = new Ably.Realtime('b5_GaA.9d4a0Q:ni423V7pOJCKSTPuUV3eTFTnWyv-s2gBHNWX6qT2HXM');
  const tokenRequestData = await client.auth.createTokenRequest({
    clientId: "story-talk"
  });
  res.status(200).json(tokenRequestData);
}