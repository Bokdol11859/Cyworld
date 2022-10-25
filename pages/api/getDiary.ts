// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { gql } from "@apollo/client";
import client from "../../apollo-client";
import { Diary } from "../../typings";

type Data = {
  data: Diary;
};

const query = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      writer
      title
      contents
      createdAt
      __typename
    }
  }
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { data } = await client.query({
    query: query,
    variables: {
      number: Number(req.query.id),
    },
  });

  res.status(200).json({ data: data });
}