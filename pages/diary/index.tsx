import React from "react";
import Card from "../../components/diary/Card";
import Header from "../../components/global/Header";
import { Diary } from "../../typings";
import { fetchDiaryData } from "../../utils/fetchDiaryData";

type Props = {
  diaries: Diary[];
};

const Diary = ({ diaries }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center px-8 h-full overflow-hidden">
      <Header title="Diary" subtitle="Today Story" />
      <div className="h-full w-full overflow-y-scroll scrollbar-hide">
        {diaries.map((diary) => (
          <Card key={diary.number} diary={diary} />
        ))}
      </div>
    </div>
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
