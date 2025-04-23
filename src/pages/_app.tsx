// pages/_app.tsx
import type { AppProps } from 'next/app';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1245796678858418`}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;