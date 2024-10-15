import {RootStoreProvider} from "@/providers/RootStoreProvider";
import FooterUi from "@/ui/footer-ui";
import HeaderUi from "@/ui/header-ui";
import {Analytics} from "@vercel/analytics/react"

import type {AppProps} from 'next/app';
import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.css';
import "@/globals.css";
import React from "react";


function MyApp({Component}: AppProps) {

    return (
        <RootStoreProvider>
            <Head>
                <title>Kerry College</title>
            </Head>
            <HeaderUi/>
            <Component/>
            <FooterUi/>
            <Analytics/>
        </RootStoreProvider>
    );
}

export default MyApp;
