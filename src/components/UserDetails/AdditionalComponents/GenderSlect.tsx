import { FC } from "react";
import { genderArrInputs } from "../UserDetails.type";

const GenderSelect: FC = ({}) => {
  return (
    <div className="flex flex-col w-2/5 pl-2">
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
          {genderArrInputs.map((genderInput, index) => (
            <div key={`${genderInput}_${index}`}>
              <input
                type={genderInput.type}
                value={genderInput.value}
                id={genderInput.id}
                data-test-id={genderInput.dataTestid}
                className="mr-2"
              />
              <label
                htmlFor={genderInput.htmlFor}
                className="text-xs text-slate-400 font-bold mr-2"
              >
                {genderInput.value}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GenderSelect;
