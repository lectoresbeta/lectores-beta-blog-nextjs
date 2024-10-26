import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Comprueba que el método es POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { token } = req.body || {};

  if (!token) {
    return res.status(400).json({ error: 'Falta el token de reCAPTCHA' });
  }

  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  try {
    const response = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();

    if (data.success) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(400).json({ success: false, error: data['error-codes'] });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Error verificando reCAPTCHA' });
  }
}
