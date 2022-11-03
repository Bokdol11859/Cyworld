import { gql } from "@apollo/client";

export const GET_DIARIES = gql`
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
`;

export const GET_DIARY = gql`
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

export const DELETE_DIARY = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number: $number) {
      message
      __typename
    }
  }
`;

export const CREATE_DIARY = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      __typename
    }
  }
`;

export const UPDATE_DIARY = gql`
  mutation updateBoard(
    $number: Int
    $writer: String
    $title: String
    $contents: String
  ) {
    updateBoard(
      number: $number
      writer: $writer
      title: $title
      contents: $contents
    ) {
      _id
      number
      __typename
    }
  }
`;
