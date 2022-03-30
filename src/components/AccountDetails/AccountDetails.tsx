import React, { FC, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { AccountDetalsContext } from "../../context/AcountDetailsContext";

import { InputsNames } from "./AccountDetails.type";
import {
  fieldsValidator,
  checkValidationFields,
} from "../../lib/validators/account-details-validator";
import SecurityQuestions from "./AdditionalComponents/SecurityQuestions";
import MarketingPreferences from "./AdditionalComponents/MarketingPreferences";
import RegisterFields from "./AdditionalComponents/RegisterFields";

const AccountDetails: FC = () => {
  const router = useRouter();
  const { inputs, setInputs } = useContext(AccountDetalsContext);
  const [isLoginFiledsValid, seIsLoginFiledsValid] = useState<boolean>(false);

  useEffect(() => {
    if (inputs?.valuesValidate) {
      seIsLoginFiledsValid(checkValidationFields(inputs.valuesValidate));
    }
  }, [inputs?.valuesValidate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (inputs) {
      const newValuesState = {
        ...inputs["initial"],
      };
      const newValuesValidateState = {
        ...inputs["valuesValidate"],
      };

      const currentElement = e.currentTarget;
      const targetName = currentElement.name as InputsNames;
      const targetValue = currentElement.value;

      newValuesState[targetName] = targetValue;
      newValuesValidateState[targetName] = fieldsValidator(
        targetValue,
        targetName
      );
      setInputs({
        ["initial"]: newValuesState,
        ["valuesValidate"]: newValuesValidateState,
      });
    }
  };

  const moveToNextStep = () => {
    if (isLoginFiledsValid) {
      router.push("/user-details");
    }
  };

  return (
    <div
      className="flex justify-center flex-col w-full items-center"
      data-testid="div"
    >
      <RegisterFields handleChange={handleChange} localState={inputs} />
      <SecurityQuestions handleChange={handleChange} localState={inputs} />
      <MarketingPreferences />
      <button
        type="button"
        data-testid="continue-button"
        className="self-center m-16 py-4 px-4 
          bg-green-500 
          text-white w-1/4 
          text-center text-base font-semibold shadow-md
          rounded-full"
        onClick={moveToNextStep}
        disabled={!isLoginFiledsValid}
      >
        CONTINUE
      </button>
    </div>
  );
};

export default AccountDetails;
