import type { NextPage } from "next";
import Head from "next/head";
import Bookmarks from "../components/global/Bookmarks";
import MusicBoard from "../components/home/MusicBoard";
import News from "../components/home/News";
import Summary from "../components/home/Summary";
import { Diary, Music } from "../typings";
import { fetchDiaryData } from "../utils/fetchDiaryData";
import { fetchMusicData } from "../utils/fetchMusicData";

type Props = {
  diaries: Diary[];
  musics: Music[];
};

const Home = ({ diaries, musics }: Props) => {
  return (
    <div>
      <Head>
        <title>넘블월드</title>
        <meta name="description" content="넘블월드" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-8 px-8">
        <div>
          <div className="flex gap-6">
            <News diaries={diaries.slice(0, 4)} />
            <Summary />
          </div>
          <MusicBoard musics={musics} />
        </div>
      </main>
    </div>
  );
};

export async function getServerSideProps() {
  const data = await fetchDiaryData();
  const musics = await fetchMusicData();

  return {
    props: {
      diaries: data,
      musics: musics,
    },
  };
}

export default Home;
