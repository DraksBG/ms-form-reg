import React, { FC, useContext, useState } from "react";
import { useRouter } from "next/router";
import { AppContext } from "../../context/state";

import { InitialInputValues, InputsNames } from "./AccountDetails.type";
import {
  authFieldsValidator,
  checkValidationFields,
} from "../../lib/Validators/account-details-validator";
import SecurityQuestions from "./AdditionalComponents/SecurityQuestions";
import MarketingPreferences from "./AdditionalComponents/MarketingPreferences";
import RegisterFields from "./AdditionalComponents/RegisterFields";

const AccountDetail: FC = () => {
  const router = useRouter();
  const [localState, setLocalState] = useState(InitialInputValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValuesState = {
      ...localState["initial"],
    };
    const newValuesValidateState = {
      ...localState["valuesValidate"],
    };

    const currentElement = e.currentTarget;
    const targetName = currentElement.name as InputsNames;
    const targetValue = currentElement.value;

    newValuesState[targetName] = targetValue;
    newValuesValidateState[targetName] = authFieldsValidator(
      targetValue,
      targetName
    );
    setLocalState({
      ["initial"]: newValuesState,
      ["valuesValidate"]: newValuesValidateState,
    });
  };

  const isLoginFiledsValid: boolean = checkValidationFields(
    localState.valuesValidate
  );

  const moveToNextStep = () => {
    if (isLoginFiledsValid) {
      router.push("/user-details");
    }
  };

  console.log(localState);
  return (
    <div
      className="flex justify-center flex-col w-full items-center"
      data-testid="div"
    >
      <RegisterFields handleChange={handleChange} localState={localState} />
      <SecurityQuestions handleChange={handleChange} localState={localState} />
      <MarketingPreferences />
      <button
        type="button"
        data-testid="continue-button"
        className="self-center m-16 py-4 px-4 
          bg-green-500 
          text-white w-1/4 
          text-center text-base font-semibold shadow-md focus:outline-none
          rounded-full"
        onClick={moveToNextStep}
        disabled={!isLoginFiledsValid}
      >
        CONTINUE
      </button>
    </div>
  );
};

export default AccountDetail;
