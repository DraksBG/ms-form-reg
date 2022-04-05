import React, { useState, createContext, FC, useEffect } from "react";
import { IContactDetailsContextProps } from "./ContextTpes.type";

export const ContactDetailsContext = createContext<IContactDetailsContextProps>(
    {} as IContactDetailsContextProps
);

const ContactDetailsProvider: FC<React.ReactNode> = ({ children }) => {
    const [isAgreedToTerms, setAgreedToTerms] = useState<boolean>(false);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAgreedToTerms(e.currentTarget.checked);
    };

    return (
        <ContactDetailsContext.Provider value={{ isAgreedToTerms, onChange }}>
            {children}
        </ContactDetailsContext.Provider>
    );
};
export default ContactDetailsProvider;
