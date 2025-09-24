import React from 'react';
import heroImage from '../assets/imgs/hero-bg.jpg';


const Hero = () => {
  return (
    <section
        className="relative pt-12 pb-[70px] overflow-hidden bg-white bg-no-repeat bg-right"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          {/* Coluna do Texto */}
          <div className="hero-text text-center mt-10 md:mt-24 w-full">
            <span className="bg-white px-[20px] py-[4px] rounded-full font-bold uppercase inline-block mb-4">
              PARA RESTAURANTES INTELIGENTES
            </span>
            <h2 className="text-[85px] font-bold leading-[90px] mb-6 break-words whitespace-pre-line">
              Transforme seu 
              <br />atendimento com um 
              <br />sistema rápido,moderno e 
              <br />100% online
            </h2>
              <div className="flex justify-center w-full">
                <p className="text-black text-base md:text-lg text-center mb-8 max-w-xl font-medium drop-shadow-sm">
                  Pedidos por tablet, cardápio via QR Code e controle total — tudo sem complicação. Comece agora mesmo.
                </p>
              </div>
              <div className="flex justify-center w-full">
                <a href="https://queroja.pt/menuh/registro/?id=0" className="inline-block bg-black hover:bg-gray-900 text-white font-bold py-3 px-6 transition duration-300 text-base md:text-lg shadow-lg" style={{ borderRadius: '15px' }}>
                  Crie Sua Conta Grátis
                </a>
              </div>
          </div>
        </div>
      </div>

      {/* Ícones de Formas (Shaps) Flutuantes */}

    </section>
  );
};

export default Hero;