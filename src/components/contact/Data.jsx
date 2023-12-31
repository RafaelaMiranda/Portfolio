import React from "react";
import { WhatsappLogo, At } from "@phosphor-icons/react";

const Data = () => {
  return (
    <div className="contact__content">
      <h3 className="contact__title">Contato</h3>
      <p className="contact__description">Entre em contato comigo</p>
      <div className="contact__info">
        <a href="mailto:ola@rafaelamiranda.com.br" className="button button--flex">
          E-mail 
          <At size={24} />
        </a>
        <a href="https://wa.link/6j4t9w" target="_blank" rel="noreferrer" className="button button--flex">
          Whatsapp
          <WhatsappLogo size={24} />
        </a>
      </div>
    </div>
  )
}

export default Data