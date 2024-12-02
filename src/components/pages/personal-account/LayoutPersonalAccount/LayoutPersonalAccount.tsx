import { FC, ReactNode } from "react";
import LayoutSite from "@/components/layout/LayoutSite";
import Link from "next/link";
import PersonalAcc from "../PersonalAcc";

interface LayoutPersonalAccountProps {
  children: ReactNode;
}

const LayoutPersonalAccount: FC<LayoutPersonalAccountProps> = ({ children }) => {
  return <div className="container" style={{display: "flex", gap: "50px"}}>
    <div  >
      <PersonalAcc/>
    </div>
    
    {children}</div>;
};

export default LayoutPersonalAccount;