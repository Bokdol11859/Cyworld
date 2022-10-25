import { useRouter } from "next/router";
import React from "react";
import { Diary } from "../../typings";
import { fetchDiaryData } from "../../utils/fetchDiaryData";
import { fetchEachDiaryData } from "../../utils/fetchEachDiaryData";

type props = {
  diary: Diary;
};

const DiaryDetail = ({ diary }: props) => {
  const router = useRouter();
  console.log(diary);
  return <div>{router.query.id}</div>;
};

export async function getStaticPaths() {
  const diaries = await fetchDiaryData();
  console.log(diaries);
  const paths = diaries.map((diary) => ({
    params: {
      id: diary.number.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: { params: { id: any } }) {
  const id = context.params.id;
  // console.log(id);
  const diary = await fetchEachDiaryData(id);
  return {
    props: {
      diary: diary,
    },
  };
}

export default DiaryDetail;
