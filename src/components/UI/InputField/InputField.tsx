import { FC } from "react";
export interface InputFieldProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;
  errorMessage: string;
  value: string;
  placeholder: string;
  name: string;
  dataTestid?: string;
  type: string;
}

const InputField: FC<InputFieldProps> = ({
  onChange,
  isValid,
  errorMessage,
  value,
  placeholder,
  name,
  type,
  dataTestid,
}) => {
  return (
    <>
      <div className="m-2 border border border-gray-400 py-3 px-5 w-auto rounded-md">
        <input
          type={type}
          data-testid={dataTestid}
          className="peer bg-white 
            text-gray-500 placeholder-gray-500 focus:outline-none w-4/5"
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          required
          value={value}
        />
      </div>
      <div className="flex w-auto">
        {!isValid && (
          <span className="mb-3 pl-5 text-xs text-rose-500 self-baseline">
            {errorMessage}
          </span>
        )}
      </div>
    </>
  );
};

export default InputField;
