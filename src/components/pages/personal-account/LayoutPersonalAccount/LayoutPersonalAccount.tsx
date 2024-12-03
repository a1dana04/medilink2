import { FC, ReactNode } from "react";
import LayoutSite from "@/components/layout/LayoutSite";
import Link from "next/link";
import PersonalAcc from "../PersonalAcc";
import s from "./LayoutPersonalAccount.module.scss";
interface LayoutPersonalAccountProps {
  children: ReactNode;
}

const LayoutPersonalAccount: FC<LayoutPersonalAccountProps> = ({
  children,
}) => {
  return (
    <div className="container">
      <div className={s.layout}>
        <div className={s.acc}>
          <PersonalAcc />
        </div>
        <div className={s.children}>{children}</div>
      </div>
    </div>
  );
};

export default LayoutPersonalAccount;
