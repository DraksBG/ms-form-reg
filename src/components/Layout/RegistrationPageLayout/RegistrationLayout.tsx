import { FC } from "react";

const RegistrationLayout: FC = ({ children }) => (
  <div
    className="flex justify-center flex-col w-full items-center"
    data-testid="div"
  >
    {children}
  </div>
);

export default RegistrationLayout;