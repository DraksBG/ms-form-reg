import { FC } from "react";

export interface CheckboxProps {
    text: string;
}
const Checkbox: FC<CheckboxProps> = ({ text }) => {
    return (
        <div className="flex my-2">
            <input type="checkbox" className=" form-tick w-7 h-7 mr-1" />
            <span className=" text-slate-500">{text}</span>
        </div>
    );
};

export default Checkbox;
