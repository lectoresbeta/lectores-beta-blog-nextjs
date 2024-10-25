import Image from 'next/image';
import { FacebookOutlined, InstagramOutlined, XOutlined } from '@ant-design/icons';
import Link from 'next/link';
import './Footer.scss';

const Footer = () => {
  const email = 'hola@lectoresbeta.com'; // Puedes definir directamente el email aquí

  return (
    <footer className="c__Footer">
      <div>
        <div>
          <Image src="/imagotipo.svg" alt="Lectores Beta" width={100} height={50} /> {/* Ajusta el tamaño si es necesario */}
        </div>
        <div className="c__Footer__Socials">
          <a href="https://www.facebook.com/LectoresBeta" target="_blank" rel="noreferrer">
            <FacebookOutlined />
          </a>
          <a href="https://x.com/LectoresBeta" target="_blank" rel="noreferrer">
            <XOutlined />
          </a>
          <a href="https://www.instagram.com/lectores_beta/" target="_blank" rel="noreferrer">
            <InstagramOutlined />
          </a>
        </div>
      </div>
      <hr/>
      <div>
        <ul>
          <li><Link href="/politica-privacidad">Privacidad</Link></li>
          <li><Link href="/cookies">Cookies</Link></li>
          <li><Link href="/aviso-legal">Legal</Link></li>
          <li><a href={`mailto:${email}`}>Contacto</a></li>
        </ul>
        <span>© 2024 Lectores Beta</span>
      </div>
    </footer>
  );
};

export default Footer;
