import React from "react";
import Header from "../components/global/Header";
import LottoGame from "../components/game/LottoGame";
import WordGame from "../components/game/WordGame";
import Head from "next/head";
import { randomizeNumber } from "../utils/randomizeNumbers";

type Props = {
  numbers: number[];
};

const Game = ({ numbers }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center px-8 py-0">
      <Header title="Game" subtitle="Today Choice" />
      <div className="flex flex-col gap-4">
        <WordGame />
        <LottoGame initialNumbers={numbers} />
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const numbers = randomizeNumber();

  return {
    props: {
      numbers,
    },
  };
}

export default Game;
