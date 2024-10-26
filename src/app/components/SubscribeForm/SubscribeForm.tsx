'use client';

import React, { useState } from 'react';
import { Checkbox, message } from 'antd';
import './SubscribeForm.scss';
import Button from '../Button/Button';
import Message from '../Message/Message';
import ReCaptcha from '../ReCaptcha/ReCaptcha';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const apiToken = process.env.NEXT_PUBLIC_VITE_API_TOKEN;
  const [token, setToken] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return alert("Error: reCAPTCHA no completado");
    
    const response = await fetch('/api/verify-recaptcha', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    });

    const data = await response.json();
    if (!data.success) {
      message.error('Error: No se pudo verificar el ReCaptcha');
    }

    if (!acceptedTerms) {
      message.error('Debes aceptar los términos y condiciones para continuar.');
      return;
    }

    try {
      const response = await fetch('https://api.lectoresbeta.com/api/leads', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            email: email,
          },
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      }
    } catch {
      message.error('Error en la solicitud');
    }
  };

  return (
    <div className="c__SubscribeForm__Wrapper">
      {submitted ? (
        <Message>
          Muchas gracias. Te has suscrito correctamente.
        </Message>
      ) : ( 
        <form className='c__SubscribeForm' onSubmit={handleSubmit}>
          <ReCaptcha onVerify={setToken} action="submit_form" />
          <div>
            <input
              type='email'
              placeholder='Ingresa tu email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="primary">Avísame</Button>  
          </div>

          <div className="c__SubscribeForm__Terms">
            <label>
              <Checkbox checked={acceptedTerms} onChange={(e) => setAcceptedTerms(e.target.checked)} required />
                <span style={{ marginLeft: '5px' }}> He leído y acepto la <a href="/politica-privacidad" target="_blank" style={{ cursor: 'pointer', textDecoration: 'underline' }}>política de privacidad</a></span>
            </label>
          </div>
        </form>
      )}
    </div>
  );
};

export default SubscribeForm;