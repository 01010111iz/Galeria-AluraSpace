import React, { useState } from "react";
import Cards from "./cards";

import Tags from "tags/index";
import Style from "galeria.module.scss";
import fotos from "fotos.json";

export default function Galeria() {
  const[itens, setItens] = useState(fotos)
  const tags = [...new Set(fotos.map((valor) => valor.tag))]

  const filtrarFotos = (tag) => {
    const NovasFotos = fotos.filter((foto) => (
      foto.tag === tag
    ));

    setItens(NovasFotos);
  }

  return (
    <section>
      <h2>Navegue pela Galeria</h2>
      <Tags tags={tags} filtrarFotos={filtrarFotos} setItens={setItens } />
      <Cards itens={itens} styles={Style} />
    </section>
  );
}
