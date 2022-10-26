import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import Header from "../../../components/global/Header";
import { useDiary } from "../../../contexts/DiaryContext";
import { gql } from "@apollo/client";
import client from "../../../apollo-client";

type Props = {};

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

const EditDiary = (props: Props) => {
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
      <div className="flex flex-col items-center gap-4 justify-center w-full h-72 border-[1.5px] border-[#DDDDDD] rounded-md">
        <input
          placeholder="제목을 입력해주세요"
          defaultValue={diaryData.title}
          ref={titleRef}
          className="text-xs pl-2 w-11/12 h-6 border-[1.5px] border-[#DDDDDD] rounded-md"
        />
        <textarea
          defaultValue={diaryData.content}
          ref={contentRef}
          className="w-11/12 h-3/4 border-[1.5px] border-[#DDDDDD] rounded-md"
        />
      </div>
      <div className="flex w-full items-center justify-center gap-6 py-5">
        <div onClick={handleEdit} className={buttonStyle}>
          수정하기
        </div>
        <div
          onClick={() => {
            router.back();
          }}
          className={buttonStyle}
        >
          취소하기
        </div>
      </div>
    </div>
  );
};

const buttonStyle =
  "border-[#666666] border-[1.5px] px-3 py-[2px] bg-[#D9D9D9] hover:bg-[#666666] hover:text-white rounded-md cursor-pointer text-sm";

export default EditDiary;
