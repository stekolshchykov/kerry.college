import {RootStoreProvider} from "@/providers/RootStoreProvider";
import FooterUi from "@/ui/footer-ui";
import HeaderUi from "@/ui/header-ui";

import type {AppProps} from 'next/app';
import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.css';
// import "@/globals.scss";
import React from "react";


function MyApp({Component}: AppProps) {

    return (
        <RootStoreProvider>
                <Head>
                    <title>!!!</title>
                </Head>
                <HeaderUi/>
                <Component />
                <FooterUi/>
        </RootStoreProvider>
    );
}

export default MyApp;
