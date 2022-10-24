import React from "react";
import { Diary } from "../../typings";
import Tag from "./Tag";

type Props = {
  diaries: Diary[];
};

const News = ({ diaries }: Props) => {
  return (
    <div className="w-[250px]">
      <div className="font-[Lato] font-black text-md text-[#55B2D4]">
        Updated news
      </div>
      <hr className="my-1 h-0.5 bg-[#999999]" />
      <div className="flex flex-col gap-1">
        {diaries.map((diary) => (
          <div key={diary.number} className="flex items-center gap-2">
            <Tag title={"다이어리"} />
            <div className="font-[Lato] font-black text-xs">{diary.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
