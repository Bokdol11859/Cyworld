import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import Sublayout from "../components/Sublayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Sublayout>
        <Component {...pageProps} />
      </Sublayout>
    </Layout>
  );
}

export default MyApp;
