import Steps from "../../UI/InputField/Steps";

const Header = () => {
    return (
        <header className="flex justify-center items-center m-5">
            <div className="flex flex-col items-center pb-10">
                <span className="text-cyan-900 text-2xl font-bold pb-5">
                    Register
                </span>
                <Steps />
            </div>
        </header>
    );
};

export default Header;
