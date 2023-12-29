import React from "react";
import hand from '../../assets/hand.svg';
import send  from '../../assets/send.svg';
import Social from "./Social";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Rafaela Miranda
        <img src={hand} alt="ícone de mão" className="home__hand"/>
      </h1>
      <h3 className="home__subtitle">Desenvolvedora Web</h3>
      <p className="home__description">Sou uma desenvolvedora web criativa, fervorosamente apaixonada e dedicada ao meu trabalho. Busco incessantemente inovações e desafios que impulsionem o aprimoramento das minhas habilidades, contribuindo para projetos notáveis no vasto universo digital. Residente em Santa Bárbara d'Oeste, SP. 📌</p>

      <Social />

      <a href="#contact" className="button button--flex">
        Entre em contato
        <img src={send} alt="ícone de enviar" />
      </a>
    </div>
  )
}

export default Data