import React from "react";
import Social from "./Social";
import coffee from "../../assets/coffee.png";
import globe from "../../assets/globe.png";


const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Rafaela Miranda
        <ConvertImage image={coffee} alt="ícone de uma xícara de café" className="home__coffee" />
      </h1>
      <h3 className="home__subtitle">Desenvolvedora Web</h3>
      <p className="home__description">Desenvolvedora web apaixonada e dedicada, em constante busca por inovação e desafios para aprimorar suas habilidades, contribuindo para projetos notáveis no universo digital. <img src={globe} alt="ícone de um globo" width={16} height={16} /></p>
      <Social />
    </div>
  )
}

export default Data