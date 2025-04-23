import Document, { Head, Html, Main, NextScript } from 'next/document'
import Script from "next/script";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}`}
            strategy="lazyOnload"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}