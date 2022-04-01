import { FC } from "react";
import { genderArrInput } from "../UserDetails.type";

const GenderSelect: FC = ({}) => {
  return (
    <div className="flex flex-col">
      <span className="text-xs text-slate-500 font-bold mt-5 mb-3">Gender</span>
      <div className="flex">
        {genderArrInput.map((genderInput) => (
          <>
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
          </>
        ))}
      </div>
    </div>
  );
};

export default GenderSelect;