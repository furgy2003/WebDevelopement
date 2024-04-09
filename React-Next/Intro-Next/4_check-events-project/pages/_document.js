// special file in Next.js used to modify the HTML boiler plate (non-default)
import Document from "next/document";
import { Html, Head, Main, NextScript } from "next/document";

// the default HTML boiler plate given by Next.js is
{
  /* <Html>
  <Head />
  <body>
    <Main />
    <NextScript />
  </body>
</Html>; */
}

// to override the default setting, must inherit the original Document
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
