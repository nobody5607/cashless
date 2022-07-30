import Document, { Html, Head, Main, NextScript } from 'next/document';
import i18nextConfig from '../next-i18next.config';

class MyDocument extends Document {
    render() {
        const currentLocale =
            this.props.__NEXT_DATA__.locale || i18nextConfig.i18n.defaultLocale;
        return (
            <Html lang={currentLocale}>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400;1,500&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;