import Link from "next/link";
import React from "react";
import Diary from "../../pages/diary";

type Props = {
  diary: Diary;
};

const Card = ({ diary }: Props) => {
  return (
    <div className="w-full px-4 py-2">
      <div className="w-10 bg-[#55b2d4]">s</div>
      <div>
        <p></p>
        <Link href="/">
          <a>자세히 보러 가기 {">"}</a>
        </Link>
      </div>
    </div>
  );
};

export default Card;
