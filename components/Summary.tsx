import React from "react";

type Props = {};

const Divider = () => <hr className="w-48 border-dashed border-[#999999]" />;

const Summary = (props: Props) => {
  return (
    <div className="mt-7">
      <Divider />
      <div className="flex text-[8px] font-semibold py-1 justify-between">
        <div className="w-6/12">
          다이어리 <span className="text-[#55B2D4] mx-2">0/65</span>
        </div>
        <div className="w-6/12">
          사진첩 <span className="text-[#55B2D4] mx-2">0/265</span>
        </div>
      </div>
      <Divider />
      <div className="flex text-[8px] font-semibold py-1 justify-between">
        <div className="w-6/12">
          게시판 <span className="text-[#55B2D4] mx-2">0/15</span>
        </div>
        <div className="w-6/12">
          방명록 <span className="text-[#55B2D4] mx-2">0/15</span>
        </div>
      </div>
      <Divider />
      <div className="flex invisible text-[8px] py-1">
        <div>게시판 0/15</div>
        <div>방명록 0/15</div>
      </div>
      <Divider />
    </div>
  );
};

export default Summary;
