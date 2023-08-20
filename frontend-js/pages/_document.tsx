import { Html, Head, Main, NextScript } from 'next/document';
// import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <title>CRIA: Your Friendly Baby Llama Chatbot</title>
        <meta
          property="og:title"
          content="CRIA: Your Friendly Baby Llama Chatbot"
        />
        <meta property="og:url" content="https://chat.walterteng.com" />
        <meta
          property="og:description"
          content="A ChatGPT-like chatbot powered by our open source large language model"
        />
        <meta property="og:image" content="/cria-frontend-js.jpeg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:creator" content="@davzoku" />
        <meta
          property="twitter:title"
          content="CRIA: Your Friendly Baby Llama Chatbot"
        />
        <meta
          property="twitter:description"
          content="A ChatGPT-like chatbot powered by our open source large language model"
        />
        <meta property="twitter:image" content="/cria-frontend-js.jpeg" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });
          `,
          }}
        />
      </Head>
      <body suppressHydrationWarning>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
