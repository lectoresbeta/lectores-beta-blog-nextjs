import React from 'react';
import './Header.scss';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className='c__Header'>
      <div>
      <Link href="/" className='c__Header__logo'>
        <div className='c__Header__logo__isotipo'>
          <img src="/isotipo.svg" alt="Lectores Beta" />
        </div>
        <h1>lectores<strong>beta</strong></h1>
      </Link>
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
