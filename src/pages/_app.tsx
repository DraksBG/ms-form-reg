import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import { FC } from "react";
import { AppContextProvider } from "../context/appContextProvider";
import Layout from "../components/Layout/Layout/Layout";

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <AppContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContextProvider>
  );
};

export default MyApp;
