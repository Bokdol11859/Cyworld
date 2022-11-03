import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import Card from "../../components/diary/Card";
import Header from "../../components/global/Header";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import { Diary } from "../../typings";
import { fetchDiaryData } from "../../utils/fetchDiaryData";

type Props = {
  diaries: Diary[];
};

const Diary = ({ diaries }: Props) => {
  const [diaryList, setDiaryList] = useState(diaries);
  const [page, setPage] = useState(1);
  const fetchElement = useRef(null);
  const intersecting = useInfiniteScroll(fetchElement);

  const getMoreDiaries = async () => {
    const newDiaries = await fetchDiaryData(page);
    setDiaryList((diaryList) => [...diaryList, ...newDiaries]);
  };

  useEffect(() => {
    if (intersecting) {
      getMoreDiaries();
      setPage((page) => page + 1);
    }
  }, [intersecting]);

  return (
    <>
      <Head>
        <title>넘블월드 / 다이어리</title>
        <meta name="description" content="넘블월드" />
        <link rel="icon" href="/static/profile.png" />
      </Head>

      <div className="flex flex-col items-center justify-center px-8 h-full overflow-hidden">
        <Header title="Diary" subtitle="Today Story" type="diary" />
        <div className="h-full w-full overflow-y-scroll scrollbar-hide">
          {diaryList.map((diary) => (
            <Card key={diary.number} diary={diary} />
          ))}
          <div ref={fetchElement} className="pb-1" />
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const diaries = await fetchDiaryData();
  return {
    props: {
      diaries: diaries,
    },
  };
}

export default Diary;
