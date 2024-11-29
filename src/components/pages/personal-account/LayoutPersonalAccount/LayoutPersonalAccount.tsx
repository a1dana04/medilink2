import { FC, ReactNode } from "react";
import LayoutSite from "@/components/layout/LayoutSite";
import Link from "next/link";

interface LayoutPersonalAccountProps {
  children: ReactNode;
}

const LayoutPersonalAccount: FC<LayoutPersonalAccountProps> = ({ children }) => {
  return <div className="container" style={{display: "flex", gap: "50px"}}>
    <div  >
        <h1>Личный кабинет</h1> <br />
        <Link href={"/personal-account"}>Записи</Link> <br />
        <Link href={"/personal-account/chats"}>Чаты</Link> <br />
    </div>
    
    {children}</div>;
};

export default LayoutPersonalAccount;