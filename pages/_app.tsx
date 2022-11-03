import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/global/Layout";
import Sublayout from "../components/global/Sublayout";
import { DiaryProvider } from "../contexts/DiaryContext";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>넘블월드</title>
        <meta name="description" content="넘블월드" />
        <link rel="icon" href="/static/profile.png" />
      </Head>
      <DiaryProvider>
        <Layout>
          <Sublayout>
            <Component {...pageProps} />
          </Sublayout>
        </Layout>
      </DiaryProvider>
    </>
  );
}

export default MyApp;
