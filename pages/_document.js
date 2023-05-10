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
        href="https://seeklogo.com/images/N/nasa-logo-D8FA7F7DE9-seeklogo.com.png"
      ></link>
      <title>Prova Orion</title>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
