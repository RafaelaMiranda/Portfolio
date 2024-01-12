import React from "react";
import CV from "../../assets/cv.pdf";
import notebook from "../../assets/notebook.webp";
import { FileText } from "@phosphor-icons/react";

const Data = () => {
  return (
    <div className="about__content">
      <img src={notebook} alt="Imagem de um notebook em cima de uma mesa" className="about__img" width={480} height={320} fetchPriority="low" />
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