import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
      />
      <link
        rel="icon"
        type="image/x-icon"
        href="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Art_logo.svg/800px-Art_logo.svg.png"
      ></link>
      <title>Prova</title>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
