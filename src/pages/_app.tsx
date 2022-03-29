import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import { FC, useState } from "react";
import { AppContext, contextDefaultValues } from "../context/state";
import Layout from "../components/Layout/Layout/Layout";

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const [currName, setCurrName] = useState<string>(contextDefaultValues.name);
  const age = 30;
  const setName = (name: string) => setCurrName(() => name);
  return (
    <AppContext.Provider value={{ name: currName, setName, age }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
};

export default MyApp;
