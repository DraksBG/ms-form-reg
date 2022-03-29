import { FC } from "react";

const MarketingPreferences: FC = () => {
  return (
    <div className="flex flex-col w-1/3 text-sm">
      <span className="text-lg font-bold">Marketing Preferences</span>
      <div className="flex my-2">
        <input type="checkbox" className=" form-tick w-7 h-7 mr-1" />
        <span className=" text-slate-500">
          I am happy for my first name to be shown on the site if I win
          (Optional)
        </span>
      </div>
      <div className="flex my-2">
        <input type="checkbox" className=" form-tick w-7 h-7 mr-1" />
        <span className=" text-slate-500">
          Email me about promotions and new, large jackpots and results
          (Optional)
        </span>
      </div>
    </div>
  );
};

export default MarketingPreferences;
