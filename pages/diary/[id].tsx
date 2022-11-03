import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import client from "../../apollo-client";
import Header from "../../components/global/Header";
import { useDiary } from "../../contexts/DiaryContext";
import { DELETE_DIARY, GET_DIARIES } from "../../graphql/queries";
import { Diary } from "../../typings";
import { fetchDiaryData } from "../../utils/fetchDiaryData";
import { fetchEachDiaryData } from "../../utils/fetchEachDiaryData";

type props = {
  diary: Diary;
};

const DiaryDetail = ({ diary }: props) => {
  const router = useRouter();
  const { setDiaryData } = useDiary();
  const date = new Date(Date.parse(diary.createdAt));

  useEffect(() => {
    setDiaryData({
      title: diary.title,
      content: diary.contents,
    });
  }, []);

  const handleDelete = async () => {
    await client.mutate({
      mutation: DELETE_DIARY,
      variables: {
        number: Number(router.query.id),
      },
      refetchQueries: [{ query: GET_DIARIES }],
    });
    window.alert("삭제 완료");
    router.push("/diary");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center px-8 py-0">
        <Header title="Diary" subtitle="" />
        <div className="w-full h-64 border-2 border-[#DDDDDD] rounded-sm">
          <div className="flex items-center pl-4 h-6 bg-[#DDDDDD]">
            <p className="text-[#666666] text-sm font-medium">
              {date.getFullYear()}-{date.getMonth() + 1}-{date.getDate()}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center h-[calc(100%-24px)]">
            <div className="h-12">
              <h1 className="font-bold">제목 : {diary.title}</h1>
            </div>
            <div className="h-[calc(100%-96px)] w-96 text-sm text-[#666666]">
              <p>{diary.contents}</p>
            </div>
          </div>
        </div>
        {diary.number}
        <div className="flex w-full items-center justify-center gap-6 py-5">
          <div
            className={buttonStyle}
            onClick={() => {
              router.push(`edit/${router.query.id}`);
            }}
          >
            수정하기
          </div>
          <div onClick={handleDelete} className={buttonStyle}>
            삭제하기
          </div>
        </div>
        <div
          className="w-full text-sm text-[#666666] underline
      underline-offset-2 cursor-pointer "
          onClick={() => {
            router.push("/diary/");
          }}
        >
          {" "}
          {"<"} 목록으로
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const diaries = await fetchDiaryData(1);
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
    revalidate: 10,
  };
}

const buttonStyle =
  "border-[#666666] border-[1.5px] px-3 py-[2px] bg-[#D9D9D9] hover:bg-[#666666] hover:text-white rounded-md cursor-pointer text-sm";

export default DiaryDetail;
