import { FC } from "react";
import { dateOfBirthInputs } from "../UserDetails.type";

const DateOfBirth: FC = () => {
  return (
    <div className="flex flex-col w-2/5 pl-2">
      <div className="mb-2">
        <span className="text-xs text-slate-500 font-bold">Date of birth</span>
      </div>
      <div className="flex w-full">
        {dateOfBirthInputs.map((dateOfBirthInput, index) => (
          <div key={`${dateOfBirthInput}_${index}`}>
            <input
              className={dateOfBirthInput.className}
              type={dateOfBirthInput.type}
              placeholder={dateOfBirthInput.placeholder}
              data-testid={dateOfBirthInput.dataTestId}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DateOfBirth;
