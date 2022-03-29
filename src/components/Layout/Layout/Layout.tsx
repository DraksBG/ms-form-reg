import { FC } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { LayoutProps } from "../Layout.types";

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <body className="flex flex-col justify-center items-center min-h-screen bg-sky-200">
      <main className="flex-grow bg-white rounded-xl shadow-2xl w-full mx-80 ">
        <Header />
        {children}
        <Footer />
      </main>
    </body>
  );
};

export default Layout;
