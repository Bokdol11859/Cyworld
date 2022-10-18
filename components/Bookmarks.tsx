import { useRouter } from "next/router";
import React, { useState } from "react";

type Props = {};

const Bookmarks = (props: Props) => {
  const router = useRouter();

  const [bookmark, setBookmark] = useState(router.pathname);

  const handleClick = (path: string) => {
    router.push(path);
    setBookmark(path);
  };

  return (
    <div className="absolute top-4 -right-[61px] text-xs flex flex-col gap-0.5">
      <div
        className={bookmark === "/" ? ActiveBookmark : InactiveBookmark}
        onClick={() => {
          handleClick("/");
        }}
      >
        홈
      </div>
      <div
        className={bookmark === "/game" ? ActiveBookmark : InactiveBookmark}
        onClick={() => {
          handleClick("/game");
        }}
      >
        게임
      </div>
      <div
        className={bookmark === "/diary" ? ActiveBookmark : InactiveBookmark}
        onClick={() => {
          handleClick("/diary");
        }}
      >
        다이어리
      </div>
    </div>
  );
};

const ActiveBookmark =
  "flex items-center justify-center font-[S-CoreDream] font-extralight w-[60px] h-9 bg-white border-black border-solid border-[1.5px] rounded-r-md cursor-pointer";

const InactiveBookmark =
  "flex items-center justify-center font-[S-CoreDream] font-extralight w-[60px] h-9 bg-[#298EB5] text-white border-black border-solid border-[1.5px] rounded-r-md cursor-pointer";

export default Bookmarks;
