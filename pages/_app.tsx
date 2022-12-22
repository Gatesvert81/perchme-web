import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import Context from '../src/Context/Context';
import Layout from '../src/Layout/Layout';
import { AppProps } from 'next/app';
import { NextPage } from 'next';
import { ComponentType, ReactElement, ReactNode } from 'react';

type Page<P = {}> = NextPage<P> & {
  // You can disable whichever you don't need
  getLayout?: (page: ReactElement) => ReactNode;
  layout?: ComponentType;
};

type Props = AppProps & {
  Component: Page;
};

function MyApp({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return (
    <SessionProvider session={pageProps.session}>
      <Context>{getLayout(<Component {...pageProps} />)}</Context>
    </SessionProvider>
  );
}

export default MyApp;
