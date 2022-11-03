import React from "react";
import Header from "../components/global/Header";
import LottoGame from "../components/game/LottoGame";
import WordGame from "../components/game/WordGame";
import Head from "next/head";

const Game = () => {
  return (
    <>
      <Head>
        <title>넘블월드 / 게임</title>
        <meta name="description" content="넘블월드" />
        <link rel="icon" href="/static/profile.png" />
      </Head>

      <div className="flex flex-col items-center justify-center px-8 py-0">
        <Header title="Game" subtitle="Today Choice" />
        <div className="flex flex-col gap-4">
          <WordGame />
          <LottoGame />
        </div>
      </div>
    </>
  );
};

export default Game;
