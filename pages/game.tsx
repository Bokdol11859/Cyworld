import React from "react";
import LottoGame from "../components/LottoGame";
import WordGame from "../components/WordGame";

type Props = {};

const Game = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center px-8 py-0">
      <div className="w-full py-4">
        <p className="uppercase text-[10px] font-[Lato] font-extrabold">
          <span className="text-[#55B2D4] font-[Lato] font-extrabold text-lg">
            GAME
          </span>{" "}
          Today Choice
        </p>
        <hr className="w-full divide-solid border[#999999] bg-[#999999] border-[1px]" />
      </div>
      <div className="flex flex-col gap-4">
        <WordGame />
        <LottoGame />
      </div>
    </div>
  );
};

export default Game;
