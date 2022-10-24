import React from "react";
import Header from "../components/global/Header";
import LottoGame from "../components/game/LottoGame";
import WordGame from "../components/game/WordGame";

type Props = {};

const Game = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center px-8 py-0">
      <Header title="Game" subtitle="Today Choice" />
      <div className="flex flex-col gap-4">
        <WordGame />
        <LottoGame />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Game;
