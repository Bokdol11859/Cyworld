import { Diary } from "../typings";

export const fetchDiaryData = async (page: Number) => {
  const Diaries: Diary[] = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getDiaries?page=${page}`
  )
    .then((res) => res.json())
    .then((data) => data.data.fetchBoards);
  return Diaries;
};
