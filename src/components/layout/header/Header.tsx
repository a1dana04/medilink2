"use client"
import React, { useState } from "react";
import logo from "../../../assets/img/Logo.png";

import { IoMenu } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import sass from "../../../components/layout/header/Header.module.scss"

const Header = () => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
  };

  return (
    <div className={sass.header1}>
      <div className="container">
        <div className={sass.header}>
          <Image src={logo} alt="img" />

          <div className={sass.nav}>

            <Link href={"/"}>Главная</Link>
            <Link href={"/"}>Запись на консультацию</Link>
          </div>
          <div className={sass.btn}>
            <button>Выбрать специалиста</button>
            <div className={sass.btn2}>
              <button>Войти</button>
            </div>
          </div>
          <h1 onClick={openModal}>
            <IoMenu />
          </h1>
        </div>

        {modal && (
          <div className={sass.modal}>
             <Image src={logo} alt="img" />
            <span onClick={() => setModal(false)}>X</span>
            <Link href={"/"}>Главная</Link>
            <Link href={"/"}>Запись на консультацию</Link>
            <a href="#">Выбрать специалиста</a>
            <a href="#">Войти</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
