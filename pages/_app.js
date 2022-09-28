import Head from 'next/head'
import { useEffect } from 'react';
import { get_config } from '../src/utils/config';
import useGlobalState from '../src/utils/store';
import '../styles/global.css';
import '../styles/highlightjs/default.css';

export default function MyApp({ Component, pageProps }) {
    const [_, setConfig] = useGlobalState('config');

    useEffect(() => {
        if ("serviceWorker" in navigator) {
            window.addEventListener("load", function () {
                navigator.serviceWorker.register("/sw.js").then(
                    function (registration) {
                        console.log("Service Worker registration successful with scope: ", registration.scope);
                    },
                    function (err) {
                        console.log("Service Worker registration failed: ", err);
                    }
                );
            });
        } else {
            console.log('service worker not in navigator');
        }
    }, []);

    useEffect(() => {
        async function loadConfigFromGithub(){
            const config = await get_config();
            setConfig(config);
        }
        loadConfigFromGithub();
    }, []);

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
                <meta name="description" content="Demo site for webapi experiments" />
                <meta name="keywords" content="Keywords" />
                <title>Portfolio - Pritam Prasad</title>

                <link rel="manifest" href="/manifest.json" />
                <link href="/icons/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
                <link href="/icons/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
                <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png"></link>
                <meta name="theme-color" content="#000" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}