import Head from 'next/head';
import Script from 'next/script';

import 'tailwindcss/tailwind.css';
import '@ionic/react/css/core.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import '../styles/global.css';
import '../styles/variables.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Component {...pageProps} />
   {/* {Component.authPage ? (
          <Component {...pageProps} />
        ) : (
          
            <Component {...pageProps} />
          </PlayerLayout>
        )} */}
    
    </>
  );
}

export default MyApp;
