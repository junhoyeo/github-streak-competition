import Document, { Head, Main, NextScript } from 'next/document';

export default class extends Document {
  render() {
    return (
      <html>
        <Head>
          <script
            src="https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css"
          />
        </Head>
        <body>
          <div className="container">
            <Main />
          </div>
          <NextScript />
        </body>
      </html>
    );
  }
};
