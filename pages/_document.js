/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }


    render() {
        return (
            <Html lang="en" className={"dark:bg-dtheme_surface duration-300"} style={{ scrollBehavior: 'smooth' }}>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
                </Head>

                <body className={"bg-theme dark:bg-dtheme_surface duration-300"}>
                    <Main />
                    <NextScript />
                </body>

            </Html>
        )
    }
}

export default MyDocument