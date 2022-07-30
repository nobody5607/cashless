import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../styles/globals.css";
import "../styles/responsive.css";

import type { AppProps } from "next/app";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { useEffect } from 'react';

//i18n
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap");
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default appWithTranslation(MyApp); 
