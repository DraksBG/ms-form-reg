import React, { FC } from "react";
import { useRouter } from "next/router";

import RegistrationLayout from "../Layout/RegistrationPageLayout/RegistrationLayout";
import InputField from "../UI/InputField/InputField";

const UserDetail: FC = () => {
  const router = useRouter();

  return (
    <RegistrationLayout>
      <div className="w-2/5 flex flex-col text-slate-500 text-sm">
        <span className="pb-5 pl-3">Enter your details below.</span>
        <span className=" pl-3 text-xs w-auto" data-testid="second-sentance">
          Please ensure your details are correct before completing registration.
          Pleaese note that you cannot add a payment card to your account until
          it is ID verified
        </span>
      </div>
      <div className="flex flex-col w-2/5 align-baseline">
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

        <div className="flex flex-col w-full pl-2">
          <div className="mb-2">
            <span className="text-xs text-slate-500 font-bold">
              Date of birth
            </span>
          </div>
          <div className="flex w-full">
            <input
              className="w-1/5 border border-gray-400 rounded-md py-3 px-5 mr-3"
              type="text"
              placeholder="DD"
              data-testid="day-input"
            />
            <input
              className="w-1/5 border border-gray-400 rounded-md py-3 px-5 mr-3"
              type="text"
              placeholder="MM"
              data-testid="month-input"
            />
            <input
              className="w-1/4 border border-gray-400 rounded-md py-3 px-5 mr-3"
              type="text"
              placeholder="YYYY"
              data-testid="year-input"
            />
          </div>
          <div className="flex flex-col text-xs text-slate-500 ">
            <span className="mb-2 mt-2">You must be over 18 years old</span>
            <span>
              Your Date of Birth cannot be changed later and will be used if you
              need to Reset Your Password so <b>please ensure it is correct.</b>
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-slate-500 font-bold mt-5 mb-3">
              Gender
            </span>
            <div className="flex">
              <input
                type="radio"
                value="Male"
                id="male-input"
                data-test-id="male-input"
                className="mr-2"
              />
              <label
                htmlFor="male-input"
                className="text-xs text-slate-400 font-bold mr-2"
              >
                Male
              </label>
              <input type="radio" value="Female" className="mr-2"  data-test-id="female-input" />
              <label
                htmlFor="male-input"
                className="text-xs text-slate-400 font-bold mr"
              >
                Female
              </label>
            </div>
          </div>
        </div>
      </div>
    </RegistrationLayout>
  );
};

export default UserDetail;
