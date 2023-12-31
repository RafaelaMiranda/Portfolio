import React from "react";
import CV from "../../assets/rafaela-miranda-cv.pdf";
import { FileText } from "@phosphor-icons/react";

const Data = () => {
  return (
    <div className="about__content">
      <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="about__img" />
      <div className="about__data">
        <h3 className="about__stack-title">Sobre mim</h3>
        <p className="about__description">
          Como desenvolvedora, possuo um conjunto de habilidades em HTML, CSS, JavaScript, React, Tailwind e PHP. Me destaco pela acessibilidade e manutenção de sites responsivos que oferecem uma experiência do usuário fluida. Minha especialidade está em criar interfaces dinâmicas e interativas por meio da escrita de código limpo e otimizado, utilizando ferramentas e técnicas de desenvolvimento de ponta. 
        </p>
        <a href={CV} target="_blank" className="button button--flex">
          Ver currículo
          <FileText size={26} />
        </a>
      </div>
    </div>
  )
}

export default Data