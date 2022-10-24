import React, { ReactNode } from "react";

type Props = {
  title: string;
  subtitle: string;
  type?: string;
};

const Header = ({ title, subtitle, type }: Props) => {
  return (
    <div className="w-full py-4">
      <div className="flex justify-between">
        <p className="uppercase text-[10px] font-[Lato] font-extrabold">
          <span className="text-[#55B2D4] font-[Lato] font-extrabold text-lg">
            {title}
          </span>{" "}
          {subtitle}
        </p>
        {type === "diary" && (
          <div className="flex items-center justify-center px-1 border-[#ABABAB] border-[1.5px] w-[70px] h-6 text-[10px] rounded-md cursor-pointer">
            다이어리 작성
          </div>
        )}
      </div>
      <hr className="w-full divide-solid border[#999999] bg-[#999999] border-[1px]" />
    </div>
  );
};

export default Header;
