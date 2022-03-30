import { FC, useState } from "react";
export interface InputFieldProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;
  errorMessage: string;
  value: string;
  placeholder: string;
  name: string;
  dataTestid?: string;
  type: string;
  showPassword?: boolean;
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
  showPassword,
}) => {
  const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false);

  return (
    <>
      <div className="flex m-2 border border border-gray-400 py-3 px-5 w-auto rounded-md">
        <input
          type={showPassword ? (isPasswordShown ? "text" : "password") : type}
          data-testid={dataTestid}
          className="peer bg-white 
            text-gray-500 placeholder-gray-500 focus:outline-none w-4/5"
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          required
          value={value}
        />
        {showPassword && (
          <button
            onClick={() => setIsPasswordShown(!isPasswordShown)}
            className="focus:outline-none"
          >
            <img src="/assets/images/icons8-hide-24.png" className="ml-10" />
          </button>
        )}
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
