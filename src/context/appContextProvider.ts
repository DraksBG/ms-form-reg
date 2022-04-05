import { combineComponents } from "../lib/combainedComponents";
import AccountDetailsProvider from "./AcountDetailsContext";
import ContactDetailsProvider from "./ContactsDetailsContext";
import { UserDetailsProvider } from "./UserDetailsContext";

const providers = [
    AccountDetailsProvider,
    UserDetailsProvider,
    ContactDetailsProvider,
];

export const AppContextProvider = combineComponents(...providers);
