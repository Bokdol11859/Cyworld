// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { gql } from "@apollo/client";
import client from "../../apollo-client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data } = await client.query({
    query: gql`
      query fetchBoards($page: Int) {
        fetchBoards(page: $page) {
          number
          writer
          title
          contents
          createdAt
          __typename
        }
      }
    `,
  });
  res.status(200).json({ data: data });
}
