import React from 'react'
import fav from "./favorito.png"
import open from "./open.png";

export default function Card({item, styles}) {
  return (
    <li key={item.id} className={styles.galeria__cards}>
    <img
      className={styles.galeria__imagem}
      src={item.imagem}
      alt={item.titulo}
    />
    <p className={styles.galeria__descricao}> {item.titulo} </p>
    <div>
      <p> {item.creditos} </p>
      <span>
        <img src={fav} alt="Ícone coração de curtir" />
        <img src={open} alt="ícone de abrir modal" />
      </span>
    </div>
  </li>
  )
}
