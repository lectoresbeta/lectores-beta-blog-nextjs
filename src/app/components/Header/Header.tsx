import React from 'react';
import './Header.scss';
import Button from '../Button/Button';

const Header: React.FC<HeaderProps> = ({ scrollToPrefooter }) => {
  const handleClick = () => {
    console.log('Botón clicado');
  };

  return (
    <header className='c__Header'>
      <div>
      <a href="/" className='c__Header__logo'>
        <div className='c__Header__logo__isotipo'>
          <img src="/isotipo.svg" alt="Lectores Beta" />
        </div>
        <h1>lectores<strong>beta</strong></h1>
      </a>
      <div className='c__Header__menu'>        
        <nav>
          <ul>
            <li>
              <a href="/recursos" >Recursos</a>
            </li>
          </ul>
        </nav>
        <a className="c__Button" href="#Prefooter">Avísame del lanzamiento</a>    
      </div>
      </div>
    </header>
  );
};

export default Header;
