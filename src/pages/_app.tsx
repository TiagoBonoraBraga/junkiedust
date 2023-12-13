import '@/styles/globals.css';
// import { GetServerSideProps } from 'next';
// import { useState, type ReactElement, type ReactNode } from 'react';
// import type { NextPage } from 'next';
import { Print } from '@/components/atoms/Print';
import { getAllFilesAndPaths } from '@/lib/files';

// import { AppProps } from 'next/app';
import { File, Path } from '@/types/index';
// import Layout from '@/components/templates/Layout';

// function MyApp({ Component, pageProps }: AppProps) {
//   return;
//   <Layout {...pageProps}>
//     <Component {...pageProps} />
//   </Layout>;
// }

// // interface ButtonProps {
// //   onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
// //   // Other props...
// // }

// export const getServerSideProps: GetServerSideProps = async () => {
//   const res = getAllFilesAndPaths('./public/songs', [], []);
//   const files: File[] = res.arrayOfFiles.reverse();
//   const paths: Path[] = res.arrayOfPaths.reverse();
//   if (!files) {
//     return {
//       notFound: true,
//     };
//   }
//   return {
//     props: {
//       files: files,
//       paths: paths,
//       songPosition: 0,
//     },
//   };
// };

// export default MyApp;

import App, { AppContext, AppInitialProps, AppProps } from 'next/app'


export default function MyApp({
  Component,
  pageProps,
}: AppProps) {
  return (
    <>
      {/* <Print>{{
        pageProps,
      }}</Print> */}
      <Component {...pageProps} />
    </>
  )
}

MyApp.getInitialProps = async (
  context: AppContext
): Promise<AppInitialProps> => {

  const ctx = await App.getInitialProps(context)
  const res = getAllFilesAndPaths('./public/songs', []);
  const paths: Path[] = res.arrayOfPaths.reverse();
  return {
    ...ctx,
    pageProps: {
      paths,
      songPosition: 0,
    }
  };



  // return { ...ctx, example: 'data' }
}
