import React, { useState } from 'react';
import { Code, SquaresFour, User, X, Envelope, House } from "@phosphor-icons/react"
import './header.css';

const Header = () => {
  // Toggle Menu
  const[Toggle, showMenu] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">Rafaela</a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <House size={26} className="nav__icon" />
                Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#sobre" className="nav__link">
                <User size={26} className="nav__icon" />
                Sobre
              </a>
            </li>

            <li className="nav__item">
              <a href="#projetos" className="nav__link">
                <Code size={26} className="nav__icon" />
                Projetos
              </a>
            </li>

            <li className="nav__item">
              <a href="#contato" className="nav__link">
                <Envelope size={26} className="nav__icon " />
                Contato
              </a>
            </li>
          </ul>

          <X size={26} onClick={() => showMenu(!Toggle)} className="nav__close " />
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <SquaresFour size={26} />
        </div>
      </nav>
    </header>
  );
}

export default Header;