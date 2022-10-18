import React from "react";

type Props = {
  title: string;
};

const Tag = ({ title }: Props) => {
  return (
    <div className="text-[7px] bg-[#EE3E61] px-0.5 rounded-sm text-white font-[pretendard]">
      {title}
    </div>
  );
};

export default Tag;
