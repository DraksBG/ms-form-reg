import { combineComponents } from "../lib/combainedComponents";
import AccountDetailsProvider from "./AcountDetailsContext";

const providers = [AccountDetailsProvider];

export const AppContextProvider = combineComponents(...providers);
