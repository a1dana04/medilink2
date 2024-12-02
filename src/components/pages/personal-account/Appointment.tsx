import React from "react";
import sass from "../personal-account/Appointment.module.scss";

const Appointment = () => {
  return (
    <div className={sass.zapis}>
      <div className={sass.btn}>
        <button className={sass.btn1}>Запланированные</button>
        <button className={sass.btn2}>Завершённые</button>
        <button className={sass.btn3}>Все</button>
      </div>

      <div className={sass.date}>
        <h1>Дата</h1>
        <h1>Специалист</h1>

      </div>

      <div className={sass.list}>
        <div className="">

        </div>

      </div>
    </div>
  );
};

export default Appointment;
