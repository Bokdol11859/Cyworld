import { Diary } from "../typings";

type props = {
  id: number;
};

export const fetchEachDiaryData = async (id: props) => {
  const diary: Diary = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getDiary?id=${id}`
  )
    .then((res) => res.json())
    .then((data) => data.data.fetchBoard);

  return diary;
};
