import { FC, useContext } from "react";
import { UserDetailsContex } from "../../../context/UserDetailsContext";
import CustomDateInput from "../../UI/InputField/CustomDateInput";

const DateOfBirth: FC = () => {
  const { birthDayInputs, birthDayInputErrors, handleChange } =
    useContext(UserDetailsContex);

  return (
    <div className="flex flex-col w-2/5 pl-2">
      <div className="mb-2">
        <span className="text-xs text-slate-500 font-bold">Date of birth</span>
      </div>
      <div className="flex w-full">
        <CustomDateInput
          handleChange={handleChange}
          value={birthDayInputs?.day}
          isValid={birthDayInputErrors?.day.valid}
          errorMessage={birthDayInputErrors?.day.errorMessage}
          width="w-4/5"
          placeholder="DD"
          name="day"
          maxLength={2}
          dataTestId="day-input"
        />
        <CustomDateInput
          handleChange={handleChange}
          value={birthDayInputs?.month}
          isValid={birthDayInputErrors?.month.valid}
          errorMessage={birthDayInputErrors?.month.errorMessage}
          width="w-4/5"
          placeholder="MM"
          name="month"
          maxLength={2}
          dataTestId="month-input"
        />
        <CustomDateInput
          handleChange={handleChange}
          value={birthDayInputs?.year}
          isValid={birthDayInputErrors?.year.valid}
          errorMessage={birthDayInputErrors?.year.errorMessage}
          width="w-auto"
          placeholder="YYYY"
          name="year"
          maxLength={4}
          dataTestId="year-input"
        />
      </div>
    </div>
  );
};

export default DateOfBirth;
