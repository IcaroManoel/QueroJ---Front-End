import { FaFacebookF, FaWhatsapp, FaStar } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa"; // seta direita
import { SiInstagram } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import footerBG  from "../assets/imgs/footer-bg.jpg";
import logoQJ from "../assets/imgs/logo.png";
import googleReview from "../assets/imgs/google-w.png";

export default function Footer() {
  return (
    <footer className="relative text-white py-16" 
    style={{
            backgroundImage: `url(${footerBG})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}>
      <div className="container mx-auto px-6">
        {/* Topo - Título + CTA */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
              A Solução Nº1 em Menus Digitais para Restaurantes, Cafés e Bares
            </h2>
            <p className="text-sm md:text-base text-gray-200 leading-relaxed">
              O QueroJá ajuda restaurantes, cafés e bares a modernizarem o atendimento 
              com menus digitais interativos via QR Code. Mais rápido, mais ecológico 
              e sem custos de impressão. Gestão fácil, atualização em tempo real e 
              aumento nas vendas.
            </p>
          </div>
          <a
            href="https://queroja.pt/menuh/registro/?id=0"
            className="mt-6 lg:mt-0 bg-black hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Experimente Grátis Agora
          </a>
        </div>

        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Coluna 1 - Logo e descrição */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logoQJ} alt="QueroJá" className="w-48 h-auto" />
              <span className="font-bold text-lg"></span>
            </div>
            <p className="text-sm text-gray-200 mb-6">
              Reduza custos, agilize o serviço e aumente as vendas com um menu 
              digital com QR Code. Mais ecológico, mais prático, mais eficiente 
              para restaurantes, cafés e bares.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-black">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-black">
                <SiInstagram />
              </a>
            </div>
          </div>

          {/* Coluna 2 - Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>
                <a href="/landingpage/sobre-nos.php" className="flex items-center gap-2 hover:text-black">
                  <FaChevronRight /> Sobre Nós
                </a>
              </li>
              <li>
                <a href="contact.html" className="flex items-center gap-2 hover:text-black">
                  <FaChevronRight /> Planos e Preços
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-black">
                  <FaChevronRight /> Suporte Técnico
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-black">
                  <FaChevronRight /> Como Funciona
                </a>
              </li>
              <li>
                <a href="faq.html" className="flex items-center gap-2 hover:text-black">
                  <FaChevronRight /> Dúvidas Frequentes
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-black">
                  <FaChevronRight /> Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Contatos */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contate-nos</h3>
            <div className="flex items-start gap-3 mb-4">
              <FaWhatsapp className="text-xl text-green-400 mt-1" />
              <div>
                <span className="text-sm">Comercial:</span>
                <p>
                  <a
                    href="https://wa.me/351931920187"
                    className="hover:text-black text-sm"
                  >
                    Clique para falar no Whatsapp
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MdEmail className="text-xl text-yellow-400 mt-1" />
              <div>
                <span className="text-sm">Email:</span>
                <p>
                  <a
                    href="mailto:sac@queroja.pt"
                    className="hover:text-black text-sm"
                  >
                    sac@queroja.pt
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Direitos autorais + Avaliações */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-200 text-sm border-t border-white/20 pt-6 pr-32">
          <p>© 2025 QueroJá - Todos os direitos reservados.</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <img src={googleReview} alt="Google Reviews" className="w-26 h-auto" />
            <div className="flex text-white">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <span>(5.0)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
