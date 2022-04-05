import React, { FC, useContext } from "react";
import { AccountDetalsContext } from "../../context/AcountDetailsContext";
import { ContactDetailsContext } from "../../context/ContactsDetailsContext";
import { UserDetailsContex } from "../../context/UserDetailsContext";

import RegistrationLayout from "../Layout/RegistrationPageLayout/RegistrationLayout";

const ContactDetail: FC = () => {
    const { isAgreedToTerms, onChange } = useContext(ContactDetailsContext);
    const { inputs } = useContext(AccountDetalsContext);
    const { userDetailsInputs, birthDayInputs } = useContext(UserDetailsContex);

    const onClick = () => {
        console.log(inputs);
        console.log(userDetailsInputs, birthDayInputs);
        console.log(
            "Has agreed to the therms and conditions ",
            isAgreedToTerms
        );
    };

    return (
        <RegistrationLayout>
            <div className="w-full flex flex-col justify-center items-center">
                <div className="flex flex-col w-2/5 items-baseline mb-3 pl-20">
                    <span className="text-2xl text-cyan-900 font-extrabold">
                        One last thing!
                    </span>
                    <span className="text-xs text-slate-400 mt-2 font-bold ">
                        You need to be resident of the Republic of Ireland to
                        register.
                    </span>
                </div>
                <div className="flex w-2/5 mt-2 pl-20">
                    <input
                        type="checkbox"
                        name="confirmation"
                        data-testid="confirmation"
                        className="w-5"
                        defaultChecked={isAgreedToTerms}
                        onChange={onChange}
                    />
                    <label
                        htmlFor="confirmation"
                        className="text-slate-400 ml-2 font-bold text-sm"
                    >
                        I confirm that:
                    </label>
                </div>
                <div className="w-2/5 pl-28 pr-32 items-baseline">
                    <span className="text-slate-400 font-bold text-sm">
                        - I am leagal resident of republic of Ireland and have
                        no other online account with the National Lottery
                        (multiple accounts may be closed).
                    </span>
                    <div className="flex flex-col">
                        <span className="text-slate-400 font-bold text-sm">
                            - I am over 18 years of age
                        </span>
                        <span className="text-slate-400 font-bold text-xs">
                            (Please note: prize payouts over a 500£ and
                            withdraws over a 200£ will require proof of ID)
                        </span>
                    </div>
                    <span className="text-slate-400 font-bold text-sm">
                        {`I hearby confirm that I have read, understood and agreed to be bound
            by the Terms & Conditions of Premier Lotteries Ireland. Please read
            our Data Privacy Statemnt here.`}
                    </span>
                </div>
                <button
                    onClick={onClick}
                    className={`self-center m-16 py-4 px-4 
          ${!isAgreedToTerms ? "bg-slate-600" : "bg-green-500"} 
          text-white w-1/4 
          text-center text-base font-semibold shadow-md
          rounded-full`}
                >
                    CONTINUE
                </button>
            </div>
        </RegistrationLayout>
    );
};

export default ContactDetail;
