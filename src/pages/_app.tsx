import '@/styles/globals.css'
// import localFont from 'next/font/local'
// const superNought = localFont({ src: '../styles/supernought.ttf' })

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <main className={superNought.className}>
      <Component {...pageProps} />
    // </main>
    )
}
