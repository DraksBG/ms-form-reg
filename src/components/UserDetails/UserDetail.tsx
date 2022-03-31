import React, { FC } from "react";
import { useRouter } from "next/router";

import RegistrationLayout from "../Layout/RegistrationPageLayout/RegistrationLayout";
import InputField from "../UI/InputField/InputField";

const UserDetail: FC = () => {
  const router = useRouter();

  return (
    <RegistrationLayout>
      <div className="w-1/3 flex flex-col text-slate-500 text-sm">
        <span className="pb-5 pl-3">Enter your details below.</span>
        <span className=" pl-3" data-testid="second-sentance">
          Please ensure your details are correct before completing registration.
          Pleaese note that you cannot add a payment card to your account until
          it is ID verified
        </span>
      </div>
      <div className="flex flex-col w-1/3 align-baseline">
        <InputField
          name="first-name-input"
          type="text"
          placeholder="First Name"
          dataTestid="first-name-input"
          errorTestId="first-name-input-error"
          value=""
          errorMessage=""
          onChange={() => {}}
        />
        <InputField
          name="last-name-input"
          type="text"
          placeholder="Last Name"
          dataTestid="last-name-input"
          errorTestId="last-name-input-error"
          value=""
          errorMessage=""
          onChange={() => {}}
        />

        <div className="flex flex-col w-6/7 pl-2">
          <div className="mb-2">
            <span className="text-xs text-slate-500 font-bold">Date of birth</span>
          </div>
          <div className="flex w-full">
            <input className="w-1/6 border border-gray-400 rounded-md py-3 px-5 mr-3" type="text" placeholder="DD" data-testid="day-input"  />
            <input className="w-1/6 border border-gray-400 rounded-md py-3 px-5 mr-3" type="text" placeholder="MM" data-testid="month-input" />
            <input className="w-1/5 border border-gray-400 rounded-md py-3 px-5 mr-3" type="text" placeholder="YYYY" data-testid="year-input" />
          </div>
        </div>
      </div>
    </RegistrationLayout>
  );
};

export default UserDetail;

function undefined({}) {
  return (
    <div className="flex flex-col w-1/3 align-baseline">
      <InputField
        name="first-name-input"
        type="text"
        placeholder="First Name"
        dataTestid="first-name-input"
        errorTestId="first-name-input-error"
        value=""
        errorMessage=""
        onChange={() => {}}
      />
      <InputField
        name="last-name-input"
        type="text"
        placeholder="Last Name"
        dataTestid="last-name-input"
        errorTestId="last-name-input-error"
        value=""
        errorMessage=""
        onChange={() => {}}
      />
    </div>
  );
}
