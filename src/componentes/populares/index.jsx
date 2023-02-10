import Botao from "componentes/botao";
import React from "react";
import fotosPopulares from "./fotos-populares.json";
import Style from "./populares.module.scss";

export default function Populares() {
  return (
    <aside className={Style.populares}>
      <h2>Populares</h2>
      <ul className={Style.populares__imagens}>
        {fotosPopulares.map((fotoPopular) => {
          return (
            <li key={fotoPopular.id}>
              <img src={fotoPopular.path} alt={fotoPopular.alt} />
            </li>
          );
        })}
      </ul>
      <Botao>Ver mais fotos</Botao>
    </aside>
  );
}
