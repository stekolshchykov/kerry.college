import {RootStoreProvider} from "@/providers/RootStoreProvider";
import FooterUi from "@/ui/footer-ui";
import HeaderUi from "@/ui/header-ui";
import {Analytics} from "@vercel/analytics/react";
import type {AppProps} from "next/app";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import "@/globals.css";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <RootStoreProvider>
            <Head>
                
                <title>Kerry College</title>
                {/* Google Analytics */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-C3D30SMS9C"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-C3D30SMS9C');
                        `,
                    }}
                />

            </Head>
            <HeaderUi/>
            <Component {...pageProps} />
            <FooterUi/>
            <Analytics/>
            <ToastContainer/>
        </RootStoreProvider>
    );
}

export default MyApp;
