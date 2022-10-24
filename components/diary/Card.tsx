import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Diary } from "../../typings";

type Props = {
  diary: Diary;
};

const Card = ({ diary }: Props) => {
  const date = new Date(Date.parse(diary.createdAt));

  const router = useRouter();

  return (
    <div
      onClick={() => {
        router.push(`/diary/${diary.number}`);
      }}
      className="flex justify-between items-center w-full px-4 py-4 mb-3 border-[#DDDDDD] border-2 rounded-md cursor-pointer"
    >
      <div className="flex flex-col">
        <div className="w-16 bg-[#55b2d4] text-white font-[Pretendard] text-[10px] text-center rounded-sm py-[1px]">
          {date.getFullYear()}-{date.getMonth() + 1}-{date.getDate()}
        </div>
        <p className="text-[#999999] font-bold text-sm my-1">
          제목: {diary.title}
        </p>
      </div>
      <Link href={`/diary/${diary.number}`}>
        <a className="font-[S-CoreDream] text-[#343131] underline-offset-2 underline text-xs">
          자세히 보러 가기 {">"}
        </a>
      </Link>
    </div>
  );
};

export default Card;
