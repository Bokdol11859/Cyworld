import { useRouter } from "next/router";
import React, { useRef } from "react";
import Header from "../../../components/global/Header";
import { useDiary } from "../../../contexts/DiaryContext";
import client from "../../../apollo-client";
import Editor from "../../../components/global/Editor";
import { GET_DIARIES, UPDATE_DIARY } from "../../../graphql/queries";

const EditDiary = () => {
  const router = useRouter();

  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const { diaryData } = useDiary();

  const handleEdit = () => {
    client.mutate({
      mutation: UPDATE_DIARY,
      variables: {
        number: Number(router.query.id),
        writer: "Eric Park",
        title: titleRef.current?.value,
        contents: contentRef.current?.value,
      },
      refetchQueries: [{ query: GET_DIARIES }],
    });
    window.alert("수정 완료");
    router.push(`/diary`);
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

export default EditDiary;
