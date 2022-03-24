import { useState } from "react";
import {
  AppContext,
  contextDefaultValues,
} from "../context/state";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [currName, setCurrName] = useState<string>(contextDefaultValues.name);
  const age = 30;
  const setName = (name: string) => setCurrName(() => name);
  return (
    <AppContext.Provider value={{ name: currName, setName, age }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
