import { FC } from "react";
import InputField from "../../UI/InputField/InputField";
import { namesInputs } from "../UserDetails.type";

const NamesInputs: FC = ({}) => {
  return (
    <>
      <div className="w-2/5 flex flex-col text-slate-500 text-sm">
        <span className="pb-5 pl-3">Enter your details below.</span>
        <span className=" pl-3 text-xs w-auto" data-testid="second-sentance">
          Please ensure your details are correct before completing registration.
          Pleaese note that you cannot add a payment card to your account until
          it is ID verified
        </span>
      </div>
      <div className="flex flex-col w-2/5 align-baseline">
        {namesInputs.map((namesInput, index) => (
          <div key={`${namesInput}_${index}`}>
            <InputField
              name={namesInput.name}
              type={namesInput.type}
              placeholder={namesInput.placeholder}
              dataTestid={namesInput.dataTestId}
              errorTestId={namesInput.errorTestId}
              value=""
              errorMessage=""
              onChange={() => {}}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default NamesInputs;
