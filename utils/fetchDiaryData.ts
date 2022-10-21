import { Diary } from "../typings";

export const fetchDiaryData = async () => {
  const Diaries: Diary[] = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getDiaries`
  )
    .then((res) => res.json())
    .then((data) => data.data.fetchBoards);
  return Diaries;
};
