import Head from "next/head";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import client from "../../apollo-client";
import Editor from "../../components/global/Editor";
import Header from "../../components/global/Header";
import { CREATE_DIARY } from "../../graphql/queries";

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
    });
    window.alert("생성 완료");
    router.push("/diary");
  };

  return (
    <>
      <Head>
        <title>글 등록</title>
        <meta name="description" content="넘블월드" />
        <link rel="icon" href="/static/profile.png" />
      </Head>

      <div className="flex flex-col items-center justify-center px-8 py-0">
        <Header title="Diary | 글 등록" subtitle="" />
        <Editor
          titleRef={titleRef}
          contentRef={contentRef}
          handleCreate={handleCreate}
        />
      </div>
    </>
  );
};

export default CreateDiary;
