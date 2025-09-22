import React from 'react';
import logo from '../assets/imgs/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="absolute w-full z-10 pt-4 flex justify-center">
      <div className="max-w-5xl w-full mx-auto px-2 md:px-4">
        <div className="flex items-center justify-between bg-black p-2 md:p-4 rounded-2xl">
          {/* Logo */}
          <div className="logo flex-shrink-0">
            <a href="#">
              <img src={logo} alt="logo" className="h-8 md:h-10 w-auto" />
            </a>
          </div>

          {/* Menu de Navegação - visível apenas em md+ */}
          <nav className="navbar hidden md:block">
            <ul className="flex flex-wrap items-center space-x-2 md:space-x-4 lg:space-x-6">
              <li><a href="#about" className="text-white text-xs md:text-sm lg:text-base font-medium capitalize hover:text-green-500 transition duration-400">Funcionalidades</a></li>
              <li><a href="#services" className="text-white text-xs md:text-sm lg:text-base font-medium capitalize hover:text-green-500 transition duration-400">Porque nos Escolher</a></li>
              <li><a href="#cases" className="text-white text-xs md:text-sm lg:text-base font-medium capitalize hover:text-green-500 transition duration-400">Cases</a></li>
              <li><a href="#pricing" className="text-white text-xs md:text-sm lg:text-base font-medium capitalize hover:text-green-500 transition duration-400">Preço</a></li>
            </ul>
          </nav>

          {/* Botão de Login */}
          <a href="https://queroja.pt/menuh/login/" className="flex items-center text-white text-base md:text-lg lg:text-xl font-bold capitalize hover:text-green-500 transition duration-400 px-2 py-1 md:px-4 md:py-2 rounded-lg">
            <FontAwesomeIcon icon={faRightToBracket} className="text-lg md:text-xl lg:text-2xl mr-1 text-white" />
            <span>Entrar</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;