import { AppProps } from "next/app";
import { FC, useState } from "react";
import { AppContext, contextDefaultValues } from "../context/state";
import "../styles/globals.css";

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const [currName, setCurrName] = useState<string>(contextDefaultValues.name);
  const age = 30;
  const setName = (name: string) => setCurrName(() => name);
  return (
    <AppContext.Provider value={{ name: currName, setName, age }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
};

export default MyApp;
