import React from "react";
import Style from "./tags.module.scss";
import fotos from "../galeria/fotos.json"

export default function Tags({ tags, filtrarFotos, setItens }) {
  return (
    <div className={Style.tags}>
      <p>Filtre por tags:</p>
      <ul className={Style.tags__lista}>
        {tags.map((tag) => (
          <li key={tag} onClick={() => filtrarFotos(tag)}>
            {" "}
            {tag}{" "}
          </li>
        ))}
        <li onClick={()=>setItens(fotos)}>Todos</li>
      </ul>
    </div>
  );
}
