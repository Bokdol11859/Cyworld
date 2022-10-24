import React, { ReactNode } from "react";

type Props = {
  title: string;
  subtitle: string;
};

const Header = ({ title, subtitle }: Props) => {
  return (
    <div className="w-full py-4">
      <p className="uppercase text-[10px] font-[Lato] font-extrabold">
        <span className="text-[#55B2D4] font-[Lato] font-extrabold text-lg">
          {title}
        </span>{" "}
        {subtitle}
      </p>
      <hr className="w-full divide-solid border[#999999] bg-[#999999] border-[1px]" />
    </div>
  );
};

export default Header;
