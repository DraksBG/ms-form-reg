import { FC } from "react";
import Checkbox from "../../UI/InputField/Checkbox";
import { checkoxTextArr } from "../AccountDetails.type";

const MarketingPreferences: FC = () => {
  return (
    <div className="flex flex-col w-1/3 text-sm" key="1">
      <span className="text-lg font-bold">Marketing Preferences</span>
      {checkoxTextArr.map((text, index) => (
        <div key={`${text}_${index}`}>
          <Checkbox text={text}/>
        </div>
      ))}
    </div>
  );
};

export default MarketingPreferences;
