import React from 'react';
import './Prefooter.scss';
import SubscribeForm from '../SubscribeForm/SubscribeForm';

const Prefooter = () => {
  return (
    <section id="Prefooter" className='c__Prefooter'>
      <div>
        <h2>Encuentra lectores beta<br/>para tu obra</h2>
        <p>Comprueba su valor, mejórala y déjala lista para el siguiente paso mientras construyes tu propia comunidad.</p>
        <h3>Déjanos tu correo y te avisaremos cuando la plataforma esté lista.</h3>
        <SubscribeForm />     
      </div>
    </section>
  );
};

export default Prefooter;
