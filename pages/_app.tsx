import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/global/Layout";
import Sublayout from "../components/global/Sublayout";
import { DiaryProvider } from "../contexts/DiaryContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DiaryProvider>
      <Layout>
        <Sublayout>
          <Component {...pageProps} />
        </Sublayout>
      </Layout>
    </DiaryProvider>
  );
}

export default MyApp;
