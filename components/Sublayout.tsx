import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";

type Props = {
  children?: ReactNode;
};

const Sublayout = ({ children }: Props) => {
  return (
    <div className="px-2 py-2">
      <header className="flex items-end justify-between h-11">
        <div className="uppercase w-52 text-center font-[NeoDunggeunmo] text-sm">
          Today <span className="text-[#FF0000] ">0</span> | Total 12345
        </div>
        <div className="font-[NeoDunggeunmo] text-[#55B2D4] flex w-96 text-lg text-left">
          사이좋은 사람들, 싸이월드
        </div>
        <div className="flex items-center justify-center font-[S-CoreDream] font-extralight text-xs">
          사생활보호설정 <span className="text-[#ff6400]  ml-1">▶️</span>
        </div>
      </header>
      <div className="flex gap-2">
        <aside className="w-52 h-[430px] bg-white border-2 border-[#999999] rounded-lg">
          <Sidebar />
        </aside>
        <main className="w-[524px] h-[430px] bg-white border-2 border-[#999999] rounded-lg">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Sublayout;
