import { FC } from "react";

interface CustomDateInputProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  isValid: boolean;
  errorMessage: string;
  width: string;
  placeholder: string;
  name: string;
  maxLength: number;
  dataTestId: string;
}

const CustomDateInput: FC<CustomDateInputProps> = ({
  handleChange,
  isValid,
  errorMessage,
  value,
  width,
  placeholder,
  name,
  maxLength,
  dataTestId,
}) => {
  return (
    <div className="flex w-1/4 flex-col">
      <input
        className={`${
          width ?? "w-full"
        } border border-gray-400 rounded-md py-3 px-5 mr-3`}
        type="text"
        placeholder={placeholder}
        data-testid={dataTestId}
        value={value}
        required
        maxLength={maxLength}
        name={name}
        onChange={handleChange}
      />
      <div className="flex w-auto">
        {!isValid && (
          <span
            className="mb-3 pl-1  pt-1 text-xs text-rose-500 self-baseline"
            data-testid="day-input-error"
          >
            {errorMessage}
          </span>
        )}
      </div>
    </div>
  );
};

export default CustomDateInput;
