import Image from "next/image";
import React, { useEffect, useState } from "react";
import { randomizeNumber } from "../../utils/randomizeNumbers";

type Props = {
  initialNumbers: number[];
};

const LottoGame = ({ initialNumbers }: Props) => {
  const [numbers, setNumbers] = useState<number[]>(initialNumbers);

  const handleClick = () => {
    setNumbers(randomizeNumber());
  };

  return (
    <div className="flex flex-col items-center justify-center w-[220px] h-[168px] bg-[#F6F6F6] border-[#999999] border-solid border-[1.5px] rounded-lg">
      <Image src="/static/lotto.svg" alt="train" width={36} height={36} />
      <p className="text-xs font-extrabold mb-2">LOTTO</p>
      <p className="text-[9px] font-[Pretendard] text-[#999999] font-bold">
        버튼을 누르세요.
      </p>
      <div className="flex gap-2 border-solid border-black border-[1.5px] rounded-lg px-3 py-[2px] my-2 bg-[#FFE400]">
        {numbers.map((number) => (
          <p key={number} className="font-bold text-sm">
            {number}
          </p>
        ))}
      </div>
      <button
        onClick={handleClick}
        className="px-2 py-1 font-[Pretendard] text-xs font-medium flex item justify-center border-black border-[1.5px] rounded-lg bg-white hover:bg-[#999999] text-black hover:text-white"
      >
        새로!
      </button>
    </div>
  );
};

export default LottoGame;
