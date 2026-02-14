import '../styles/globals.css'
import 'academicons';
import { config as fontawesomeConfig } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFilePdf, faLink } from '@fortawesome/free-solid-svg-icons';

fontawesomeConfig.autoAddCss = false;

library.add(faLinkedin, faYoutube, faEnvelope, faGithub, faFilePdf, faLink); // Add icons to the library


import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
