import { useRouter } from "next/router";
import { FC } from "react";

interface NextPageButtonProps {
    disabled?: boolean;
    pageRoute?: string | any;
}

const NextPageButton: FC<NextPageButtonProps> = ({ disabled, pageRoute }) => {
    const router = useRouter();
    return (
        <button
            type="button"
            data-testid="continue-button"
            className={`self-center m-16 py-4 px-4 
            ${disabled ? "bg-slate-600" : "bg-green-500"} 
            text-white w-1/4 
            text-center text-base font-semibold shadow-md
            rounded-full`}
            onClick={() => router.push(pageRoute)}
            disabled={disabled}
        >
            CONTINUE
        </button>
    );
};

export default NextPageButton;
