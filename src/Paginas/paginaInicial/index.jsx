import style from "./paginaInicial.module.scss";
import Cabecalho from "./../../componentes/cabecalho/index";

import Banner from "componentes/banner";
import Galeria from "componentes/galeria";
import Menu from "componentes/menu";
import Populares from "componentes/populares";
import Rodape from "componentes/rodape";

export default function PaginaInicial() {
  return (
    <>
      <Cabecalho />
      <main>
        <section className={style.principal}>
          <Menu />
          <Banner />
        </section>
        <div>
          <Galeria />
          <Populares />
        </div>
      </main>
      <Rodape />
    </>
  );
}
