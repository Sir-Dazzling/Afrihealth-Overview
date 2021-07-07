import Document, {
    DocumentContext,
    Html,
    Head,
    Main,
    NextScript,
} from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)

        return initialProps
    }

    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin="true"
                    />
                    <link
                        rel="preload"
                        as="style"
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
                    />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
                        media="print"
                    // onLoad="this.media='all'"
                    />

                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link href="https://fonts.googleapis.com/css2?family=Italiana&display=swap" rel="stylesheet" />

                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css" />

                    <link href="//db.onlinewebfonts.com/c/89cab462df01ab3846f362d717bea59b?family=VisbyRoundCFBold" rel="stylesheet"/> 

                    <noscript>
                        <link
                            rel="stylesheet"
                            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
                        />
                    </noscript>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
