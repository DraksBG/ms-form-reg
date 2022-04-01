import { FC, useContext } from "react";
import { UserDetailsContex } from "../../../context/UserDetailsContext";
const GenderSelect: FC = ({}) => {
  const { inputs, handleChange } = useContext(UserDetailsContex);

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
          <div className="flex">
            <input
              name="gender"
              type="radio"
              value="Male"
              id="Male"
              data-test-id="male-input"
              className="mr-2"
              onChange={handleChange}
              checked={inputs?.gender === "Male"}
              readOnly
            />
            <label
              htmlFor="male-input"
              className="text-xs text-slate-400 font-bold mr-2"
            >
              Male
            </label>
          </div>
          <div className="flex">
            <input
              name="gender"
              type="radio"
              value="Female"
              id="Female"
              data-test-id="female-input"
              className="mr-2"
              onChange={handleChange}
              checked={inputs?.gender === "Female"}
              readOnly
            />
            <label
              htmlFor="female-input"
              className="text-xs text-slate-400 font-bold mr-2"
            >
              Female
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenderSelect;
