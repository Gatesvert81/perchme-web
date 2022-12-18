import Head from 'next/head';
import React from 'react';

function PageHead({ title, children }: { title: string; children: string }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={children} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default PageHead;
