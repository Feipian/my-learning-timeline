import { Html, Head, Main, NextScript } from 'next/document';
export default function Document() {
 return (
   <Html>
     <Head>
       {/* Google Analytics
       <script
         async
         src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
       ></script>
       <script
         dangerouslySetInnerHTML={{
           __html: `
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
             gtag('config', 'G-XXXXXXXXXX', {
               page_path: window.location.pathname,
             });
           `,
         }}
       /> */}

       {/* Google Adsense */}
       <script
         data-ad-client="ca-pub-1245796678858418"
         async
         src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
       ></script>
     </Head>
     <body>
       <Main />
       <NextScript />
     </body>
   </Html>
 );
}