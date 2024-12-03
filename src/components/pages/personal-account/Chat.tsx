import React from "react";
import sass from "@/components/pages/personal-account/Chat.module.scss";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import foto1 from "@/assets/img/Subtract.png";
import { FaCircle } from "react-icons/fa6";

const Chat = () => {
  return (
    <div className={sass.chat}>
      <div className={sass.inpt1}>
        <input type="text" placeholder="Введите имя специалиста" />
        <button>
          <span>
            <CiSearch />
          </span>
        </button>
      </div>

      <div className={sass.chat_doc}>
        <div className={sass.circle}>
          <Image src={foto1} alt="img" />
          <button>
            <FaCircle />
          </button>
        </div>

        <div className={sass.name1}>
          <h1>Светлана Александровна</h1>
          <span>Педиатр</span>
        </div>

        <div className={sass.data}>
            <p>10:58</p>
            <h1></h1>
          

        </div>
      </div>
    </div>
  );
};

export default Chat;
