import React from "react";
import glavImg from "@/assets/img/hero-img.png";

import Image from "next/image";
import Link from "next/link";
import sass from "../../pages/homesection/Glavnyi.module.scss"

const Glavnyi = () => {
  return (
    <div className={sass.glavnyi1}>
      <div className="container">
        <div className={sass.glavnyi}>
          <div className={sass.text}>
            <h1>
              Консультация <br />
              с врачом онлайн: <br />
              <span>
                {" "}
                улучшить качество <br />
                здоровья и жизни
              </span>
            </h1>
            <div className={sass.parag}>
              <div className={sass.butt}>
                <button className={sass.btn1}> Взрослому</button>
                <button className={sass.btn2}>Ребёнку</button>
              </div>
              <p>от 1 200 сом за консультацию</p>
              <Link href={"/chooseDoctor"}>
                <button className={sass.btn3}>Подобрать специалиста</button>
              </Link>
            </div>
          </div>

          <div className={sass.img}>
            <Image src={glavImg} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Glavnyi;
