import type { NextPage } from "next";
import Head from "next/head";
import News from "../components/News";
import Summary from "../components/Summary";

type Props = {
  diaries: Diary[];
};

const Home = ({ diaries }: Props) => {
  console.log(diaries);
  return (
    <div>
      <Head>
        <title>넘블월드</title>
        <meta name="description" content="넘블월드" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-8 px-8">
        <div className="flex gap-6">
          <News diaries={diaries.slice(0, 4)} />
          <Summary />
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getDiaries`)
    .then((res) => res.json())
    .then((data) => data.data.fetchBoards);

  return {
    props: {
      diaries: data,
    },
    revalidate: 10,
  };
}

export default Home;
