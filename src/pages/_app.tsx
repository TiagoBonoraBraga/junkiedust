import { GoogleAnalytics } from '@next/third-parties/google';
import '@/styles/globals.css';
import { AppContext, AppInitialProps, AppProps } from 'next/app';
import Layout from '@/components/templates/Layout';

export default function MyApp({ Component, pageProps }: AppProps) {
  const { paths } = pageProps;
  return (
    <>
      <Layout paths={paths}>
        <Component {...pageProps} />
      </Layout>
      <GoogleAnalytics gaId="G-QPQER09TTP" />
    </>
  );
}

MyApp.getInitialProps = async (
  context: AppContext,
): Promise<AppInitialProps> => {
  // const isServer = typeof window === 'undefined';

  const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/songs');
  const paths = await response.json();
  return {
    pageProps: { paths },
  };
};
