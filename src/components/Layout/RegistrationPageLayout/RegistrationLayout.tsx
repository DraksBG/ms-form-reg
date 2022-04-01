import { FC } from "react";

const RegistrationLayout: FC = ({ children }) => (
  <div
    className="flex justify-center flex-col w-full items-center mr-10 ml-10 "
    data-testid="div"
  >
    {children}
  </div>
);

export default RegistrationLayout;
