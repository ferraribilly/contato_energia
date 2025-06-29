import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="text-gray-800 py-12 px-4 font-rajdhani mt-auto shadow-md bg-gray-200 bg-gradient-to-t from-gray-200 to-white">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Contato Energia</h2>
            <p className="mb-4">
              Contato Energia é uma empresa líder em soluções de energia solar, oferecendo produtos de alta qualidade e serviços excepcionais.
            </p>
            <p>© {new Date().getFullYear()} Contato Energia. Todos os direitos reservados.</p>
          </div>

          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Redes Sociais</h2>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-gray-800 hover:text-blue-600" />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-gray-800 hover:text-blue-400" />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-gray-800 hover:text-pink-600" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="text-gray-800 hover:text-blue-700" />
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/3">
            <h2 className="text-2xl font-bold mb-4">Informações</h2>
            <ul>
              <li className="mb-2">
                <Link href="/about" className="hover:underline">Sobre Nós</Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="hover:underline">Contato</Link>
              </li>
              <li className="mb-2">
                <Link href="/privacy" className="hover:underline">Política de Privacidade</Link>
              </li>
              <li className="mb-2">
                <Link href="/terms" className="hover:underline">Termos de Serviço</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">Certificados de Segurança</h2>
          <Image
            src="/ssl.png" // <-- caminho local correto para /public/ssl.png
            alt="Certificados de Segurança"
            width={128}
            height={128}
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
