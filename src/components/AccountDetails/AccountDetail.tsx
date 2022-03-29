import React, { FC, useContext, useState } from "react";
import { useRouter } from "next/router";
import { AppContext } from "../../context/state";

import Layout from "../Layout/Layout/Layour";
import { InitialInputValues, InputsNames } from "./AccountDetails.type";
import {
  authFieldsValidator,
  checkValidationFields,
} from "../../lib/Validators/account-details-validator";

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const moveToNextStep = () => {
    if (isLoginFiledsValid) {
      router.push("/user-details");
    }
  };

  return (
    <form
      className="flex justify-center flex-col w-full items-center"
      onSubmit={handleSubmit}
      data-testid="form"
    >
      <input
        type="text"
        data-testid="email"
        className=" m-2 flex-1 border border-gray-400 w-1/3 py-3 px-4 bg-white 
            text-gray-500 placeholder-gray-500 shadow-sm text-base focus:outline-none rounded-md"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
        value={localState.initial.email}
      />
      <div className="flex w-1/3">
        {!localState.valuesValidate.email.valid && (
          <span className="mb-3 text-xs text-rose-500 self-baseline">
            {localState.valuesValidate.email.errorMessage}
          </span>
        )}
      </div>

      <div className="m-2 border border border-gray-400 py-3 px-5 w-1/3 rounded-md">
        <input
          type="password"
          data-testid="password"
          className="peer bg-white 
              text-gray-500 placeholder-gray-500 focus:outline-none"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
          value={localState.initial.password}
        />
      </div>
      <div className="flex w-1/3">
        {!localState.valuesValidate.password.valid && (
          <span className="mb-3 text-xs text-rose-500 self-baseline">
            {localState.valuesValidate.password.errorMessage}
          </span>
        )}
      </div>
      <div className="w-1/3 flex flex-col text-xs text-slate-500 border-b-2 mb-3 pl-5">
        <span className="m-0.5">8 - 12 characters</span>
        <span className="m-0.5">At least one letter</span>
        <span className="m-0.5">At least one number</span>
        <span className="m-0.5">No special characters</span>
        <span className="m-0.5 mb-5">
          Can not include your First, Last, name or email
        </span>
      </div>
      <div className="flex flex-col w-1/3 border-b-2 mb-3">
        <span className="text-lg font-bold">Security Questions</span>
        <input
          type="text"
          data-testid="security-question-1"
          className=" rounded-md my-2 flex-1 border border-gray-400 w-full py-3 px-4 bg-white 
            text-gray-500 placeholder-gray-500 shadow-sm text-base focus:outline-none"
          name="secretQuestionA"
          placeholder="Your mother's maiden name"
          onChange={handleChange}
          required
          value={localState.initial.secretQuestionA}
        />
        <div className="flex w-1/3">
          {!localState.valuesValidate.secretQuestionA.valid && (
            <span className="mb-3 text-xs text-rose-500 self-baseline">
              {localState.valuesValidate.secretQuestionA.errorMessage}
            </span>
          )}
        </div>
        <input
          type="text"
          data-testid="security-question-2"
          className=" rounded-md mt-2  mb-5 flex-1 border border-gray-400 w-full py-3 px-4 bg-white 
            text-gray-500 placeholder-gray-500 shadow-sm text-base focus:outline-none"
          name="secretQuestionB"
          placeholder="Your place of birth"
          onChange={handleChange}
          required
          value={localState.initial.secretQuestionB}
        />
        <div className="flex w-1/3">
          {!localState.valuesValidate.secretQuestionB.valid && (
            <span className="mb-3 text-xs text-rose-500 self-baseline w-full">
              {localState.valuesValidate.secretQuestionB.errorMessage}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col w-1/3 text-sm">
        <span className="text-lg font-bold">Marketing Preferences</span>
        <div className="flex my-2">
          <input type="checkbox" className=" form-tick w-7 h-7 mr-1" />
          <span className=" text-slate-500">
            I am happy for my first name to be shown on the site if I win
            (Optional)
          </span>
        </div>
        <div className="flex my-2">
          <input type="checkbox" className=" form-tick w-7 h-7 mr-1" />
          <span className=" text-slate-500">
            Email me about promotions and new, large jackpots and results
            (Optional)
          </span>
        </div>
      </div>
      <button
        type="submit"
        data-testid="continue-button"
        className="self-center m-16 py-4 px-4 
          bg-green-500 hover:bg-green-700 focus:ring-green-500 
          focus:ring-offset-green-200 text-white w-1/4 transition ease-in duration-200 
          text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 
          rounded-full"
        onClick={moveToNextStep}
        disabled={!isLoginFiledsValid}
      >
        CONTINUE
      </button>
    </form>
  );
};

export default AccountDetail;
