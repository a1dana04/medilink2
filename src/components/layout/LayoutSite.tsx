import { FC, ReactNode } from "react";
import scss from "./LayautSite.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";

interface LayoutProps {
  children: ReactNode;
}

const LayoutSite: FC<LayoutProps> = ({ children }) => {
  return <main>
    <Header/>
    {children}
    <Footer/>
    </main>;
};

export default LayoutSite;
