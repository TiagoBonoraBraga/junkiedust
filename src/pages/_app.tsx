import '@/styles/globals.css';
import App, { AppContext, AppInitialProps, AppProps } from 'next/app'
// import { RecoilRoot } from 'recoil'
// import useSWR from 'swr'

// // import { Print } from "@/components/print";
import { File, Path } from '@/types/index'
import { Print } from '@/components/atoms/Print';
import Layout from "@/components/templates/Layout";

// const fetcher = (url: string) => fetch(url).then((res) => res.json())
// const fetcher = (...args) => fetch(...args).then(res => res.json())

// type AppOwnProps = { paths: Path }

export default function MyApp({
  Component,
  pageProps
}: AppProps) {
  const { paths } = pageProps;
  return (
    // <RecoilRoot>
    <Layout paths={paths}>
      {/* <Print>{paths}</Print> */}
      <Component {...pageProps} />
    </Layout>
    // </RecoilRoot>
  )
}

MyApp.getInitialProps = async (
  context: AppContext
): Promise<AppInitialProps> => {
  const isServer = typeof window === 'undefined';
  // const { pageProps } = await App.getInitialProps(context)


  const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/songs');
  const paths = await response.json();
  // if (!isServer) {
  //   return {
  //     pageProps
  //   };

  // }

  // console.log(paths)

  return {
    pageProps: { paths }
  };

}


// import App, { AppContext, AppInitialProps, AppProps } from 'next/app'


// export default function MyApp({
//   Component,
//   pageProps,
// }: AppProps) {
//   return (
//     <>
//       {/* <Print>{{
//         pageProps,
//       }}</Print> */}
//       <Component {...pageProps} />
//     </>
//   )
// }

// MyApp.getInitialProps = async (
//   context: AppContext
// ): Promise<AppInitialProps> => {

//   const ctx = await App.getInitialProps(context)
//   const res = getAllFilesAndPaths('./public/songs', []);
//   const paths: Path[] = res.arrayOfPaths.reverse();
//   return {
//     ...ctx,
//     pageProps: {
//       paths
//     }
//   };
// }

// import type { ReactElement, ReactNode } from 'react'
// import type { NextPage } from 'next'
// import type { AppProps } from 'next/app'
// import { NextPageContext } from 'next'
// import Layout from '@/components/templates/Layout';
import pageProps from 'next/app';


// export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
//   getLayout?: (page: ReactElement) => ReactNode
// }

// type AppPropsWithLayout = AppProps & {
//   Component: NextPageWithLayout
// }



// export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
//   // Use the layout defined at the page level, if available
//   const getLayout = Component.getLayout ?? ((page) => page)

//   return getLayout(<Component {...pageProps} />)
// }