// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Music } from "../../typings";
import { Musics } from "../../Constants/MusicData";

type Data = {
  data: Music[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ data: Musics });
}
