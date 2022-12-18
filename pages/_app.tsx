import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Context from "../src/Context/Context";
import Layout from "../src/Layout/Layout";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout
    ? Component.getLayout
    : (page) => <Layout>{page}</Layout>;

  return (
    <SessionProvider session={pageProps.session}>
      <Context>{getLayout(<Component {...pageProps} />)}</Context>
    </SessionProvider>
  );
}

export default MyApp;
