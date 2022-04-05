import router from "next/router";
import { FC } from "react";

type StepProps = {
    isValidToContinue: boolean;
    stepName: string;
    routePath: string;
};

const Step: FC<StepProps> = ({ isValidToContinue, stepName, routePath }) => {
    return (
        <li className={`step ${isValidToContinue && "step-accent "}`}>
            <button
                disabled={!isValidToContinue}
                onClick={() => router.push(routePath)}
                className={`${
                    isValidToContinue && " text-cyan-900"
                } font-extrabold`}
            >
                {stepName}
            </button>
        </li>
    );
};

export default Step;
