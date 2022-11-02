import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import Header from "../../../components/global/Header";
import { useDiary } from "../../../contexts/DiaryContext";
import { gql } from "@apollo/client";
import client from "../../../apollo-client";
import Editor from "../../../components/global/Editor";
import { fetchDiaryData } from "../../../utils/fetchDiaryData";
import { fetchEachDiaryData } from "../../../utils/fetchEachDiaryData";
import { Diary } from "../../../typings";

const mutation = gql`
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

type Props = {
  diary: Diary;
};

const EditDiary = ({ diary }: Props) => {
  const router = useRouter();

  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const { diaryData } = useDiary();

  const handleEdit = () => {
    client.mutate({
      mutation: mutation,
      variables: {
        number: Number(router.query.id),
        writer: "Eric Park",
        title: titleRef.current?.value,
        contents: contentRef.current?.value,
      },
    });
    window.alert("수정 완료");
    router.push("/diary");
  };

  return (
    <div className="flex flex-col items-center justify-center px-8 py-0">
      <Header title="Diary | 글 수정" subtitle="" />
      <Editor
        titleRef={titleRef}
        contentRef={contentRef}
        handleEdit={handleEdit}
        diaryData={diaryData}
      />
    </div>
  );
};

export async function getStaticPaths() {
  const diaries = await fetchDiaryData();
  const paths = diaries.map((diary) => ({
    params: {
      id: diary.number.toString(),
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context: { params: { id: any } }) {
  const id = context.params.id;

  const diary = await fetchEachDiaryData(id);
  return {
    props: {
      diary: diary,
    },
  };
}

export default EditDiary;
