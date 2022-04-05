import { FC } from "react";
import InputField from "../../UI/InputField/InputField";
import { InputsInitiaState } from "../AccountDetails.type";

export interface Props {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    localState: InputsInitiaState;
}

const SecurityQuestions: FC<Props> = ({ handleChange, localState }) => {
    return (
        <div className="flex flex-col w-2/5 border-b-2 mb-3">
            <div className="mb-5">
                <span className="text-lg font-bold">Security Questions</span>
                <InputField
                    type="text"
                    onChange={handleChange}
                    value={localState?.initial.secretQuestionA}
                    errorMessage={
                        localState?.valuesValidate.secretQuestionA.errorMessage
                    }
                    isValid={localState?.valuesValidate.secretQuestionA.valid}
                    placeholder="Your mother's maiden name"
                    name="secretQuestionA"
                    dataTestid="security-question-1"
                    errorTestId="security-question-1-error"
                />
                <InputField
                    type="text"
                    onChange={handleChange}
                    value={localState?.initial.secretQuestionB}
                    errorMessage={
                        localState?.valuesValidate.secretQuestionB.errorMessage
                    }
                    isValid={localState?.valuesValidate.secretQuestionB.valid}
                    placeholder="Your place of birth"
                    name="secretQuestionB"
                    dataTestid="security-question-2"
                    errorTestId="security-question-2-error"
                />
            </div>
        </div>
    );
};

export default SecurityQuestions;
