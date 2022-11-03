// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import client from "../../apollo-client";
import { Diary } from "../../typings";
import { GET_DIARY } from "../../graphql/queries";

type Data = {
  data: Diary;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { data } = await client.query({
    query: GET_DIARY,
    variables: {
      number: Number(req.query.id),
    },
    fetchPolicy: "no-cache",
  });

  res.status(200).json({ data: data });
}
