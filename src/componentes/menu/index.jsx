import React from "react";
import style from "./menu.module.scss";

import maisCurtidas from "assets/icones/mais-curtidas.png";
import home from "assets/icones/home.png";
import maisVistas from "assets/icones/mais-vistas.png";
import novas from "assets/icones/novas.png";
import surpreendaMe from "assets/icones/surpreenda-Me.png";

export default function Menu() {
  return (
    <nav className={style.menu}>
      <ul className={style.menu__lista}>
        <li className={style.menu__item}>
          <img src={home} alt="" />
          <a href="/">Início</a>
        </li>
        <li className={style.menu__item}>
          <img src={maisCurtidas} alt="" />
          <a href="/">Mais Curtidas</a>
        </li>
        <li className={style.menu__item}>
          <img src={maisVistas} alt="" />
          <a href="/">Mais Vistas</a>
        </li>
        <li className={style.menu__item}>
          <img src={novas} alt="" />
          <a href="/">Novas</a>
        </li>
        <li className={style.menu__item}>
          <img src={surpreendaMe} alt="" />
          <a href="/">Surpreenda-me</a>
        </li>
      </ul>
    </nav>
  );
}
