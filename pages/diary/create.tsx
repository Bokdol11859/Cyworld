import Head from "next/head";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import client from "../../apollo-client";
import Editor from "../../components/global/Editor";
import Header from "../../components/global/Header";
import { CREATE_DIARY, GET_DIARIES } from "../../graphql/queries";

const CreateDiary = () => {
  const router = useRouter();

  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const handleCreate = () => {
    client.mutate({
      mutation: CREATE_DIARY,
      variables: {
        writer: "Eric Park",
        title: titleRef.current?.value,
        contents: contentRef.current?.value,
      },
      refetchQueries: [{ query: GET_DIARIES }],
    });
    window.alert("생성 완료");
    router.push("/diary");
  };

  return (
    <div className="flex flex-col items-center justify-center px-8 py-0">
      <Header title="Diary | 글 등록" subtitle="" />
      <Editor
        titleRef={titleRef}
        contentRef={contentRef}
        handleCreate={handleCreate}
      />
    </div>
  );
};

export default CreateDiary;
