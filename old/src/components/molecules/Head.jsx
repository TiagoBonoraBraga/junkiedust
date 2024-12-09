import Head from 'next/head';

export default function SeoHead() {
  return (
    <Head>
      <title>JUNKIE DUST - EVIL STONER</title>
      <meta name="robots" content="follow, index" />
      <meta
        content="JUNKIE DUST - DARK EVIL STONER PSYCHEDELIC - Bem-vindo ao mundo sonoro sombrio da Junkie Dust, onde o rugido dos amplificadores e a batida contundente das baquetas convergem para criar uma experiência visceral e inebriante. Mergulhe em um universo onde o metal encontra o psicodélico, e o resultado é uma viagem sônica que desafia os limites da mente e do corpo."
        name="description"
      />
      <meta property="og:url" content="https://junkiedust.com/" />
      <link rel="canonical" href="https://junkiedust.com/" />
      <meta name="application-name" content="JUNKIE DUST - EVIL STONER" />
      <meta name="author" content="Leonardo Maia - Tiago Braga" />
      <link rel="author" href="https://junkiedust.com" />
      <meta
        name="keywords"
        content="Stoner, rock, alternatice rock, psicodelic, hard"
      />
      <meta name="referrer" content="origin-when-cross-origin" />
      <meta name="creator" content="Junkie Dust" />
      <meta name="publisher" content="Fpinfo - Leoanrdo Maia - Tiago Braga" />
      <link rel="canonical" href="https://junkiedust.com" />

      <meta property="og:image" content="https://junkiedust.com/default.png" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="JUNKIE DUST - EVIL STONER" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:url" content="https://junkiedust.com" />
      <meta
        property="og:description"
        content="JUNKIE DUST - EVIL STONER - JUNKIE DUST os sons mais pesados, lentos e psicodélicos desse plano terreno"
      />
      <meta property="og:title" content="JUNKIE DUST" />
      <meta property="og:image:url" content="https://junkiedust/default.png" />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="600" />
      <meta property="og:image:url" content="https://junkiedust/default.png" />
      <meta property="og:image:width" content="1800" />
      <meta property="og:image:height" content="1600" />
      <meta property="og:image:alt" content="JUNKIE DUST" />
      <meta
        name="image"
        property="og:image"
        content="https://junkiedust.com/default.png"
      />
      <meta name="robots" content="follow, nocache" />
      <meta
        name="googlebot"
        content="index, follow, imageindex, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
      />
      <link rel="shortcut icon" href="https://junkiedust.com/default.png" />
      <link rel="icon" href="https://junkiedust.com/default.png" />
      <link rel="apple-touch-icon" href="https://junkiedust.com/default.png" />
      <link
        rel="apple-touch-icon-precomposed"
        href="https://junkiedust.com/default.png"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <meta name="google-site-verification" content="google" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {/* <meta name="twitter:site" content="@F2aldi" /> */}
      <meta name="twitter:title" content="JUNKIE DUST" />
      <meta
        name="twitter:description"
        content="JUNKIE DUST - EVIL STONER - JUNKIE DUST os sons mais pesados, lentos e psicodélicos desse plano terreno"
      />
      <meta name="twitter:image" content="https://junkiedust.com/default.png" />
      <meta
        name="author"
        property="Leonardo Maia - Tiago Braga"
        content="Leonardo Maia - Tiago Braga"
      />
    </Head>
  );
}
