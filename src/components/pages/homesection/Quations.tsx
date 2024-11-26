import React from "react";
import heart from "@/assets/img/heart-q.png";
import shugar from "@/assets/img/shugar-q.png";
import allerg from "@/assets/img/allerg-q.png";
import kost from "@/assets/img/kost-q.png";
import Image from "next/image";
import sass from "../homesection/Quations.module.scss";

const cardData = [
  { img: heart, title: "Проблемы с сердцем" },
  { img: shugar, title: "Проблемы с сахаром" },
  { img: allerg, title: "Аллергии" },
  { img: kost, title: "Проблемы с костями" },
  { img: heart, title: "Проблемы с сердцем" },
  { img: heart, title: "Проблемы с сердцем" },
  { img: heart, title: "Проблемы с сердцем" },
  { img: heart, title: "Проблемы с сердцем" },
  { img: heart, title: "Проблемы с сердцем" },
  { img: heart, title: "Проблемы с сердцем" },

  
];

const Quations = () => {
  return (
    <div className={sass.quations1}>
      <div className="container">
        <h2>
          С чем работают специалисты <span>MediLink</span>
        </h2>
        <div className={sass.quations}>
          {cardData.map((el, index) => (
            <div key={index} className={sass.card}>
              <Image src={el.img} alt={el.title} />
              <h5>{el.title}</h5>
            </div>
          ))}
        </div>
        <div className={sass.btn}>
          <button>Задать вопрос</button>
        </div>
      </div>
    </div>
  );
};

export default Quations;
