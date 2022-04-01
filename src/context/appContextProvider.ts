import { combineComponents } from "../lib/combainedComponents";
import AccountDetailsProvider from "./AcountDetailsContext";
import { UserDetailsProvider } from "./UserDetailsContext";

const providers = [AccountDetailsProvider, UserDetailsProvider];

export const AppContextProvider = combineComponents(...providers);
