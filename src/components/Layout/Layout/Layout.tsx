import { FC } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { LayoutProps } from "../Layout.types";

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <body className="flex flex-col justify-center items-center min-h-screen bg-sky-200 pb-1 pt-1">
            <main className="flex-grow flex flex-col items-center bg-white rounded-xl shadow-2xl w-full">
                <Header />
                {children}
                <Footer />
            </main>
        </body>
    );
};

export default Layout;
