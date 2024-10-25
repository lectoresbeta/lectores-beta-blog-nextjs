import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email } = await request.json();

  const token = process.env.NEXT_PUBLIC_API_TOKEN; // Usar tu token de entorno

  try {
    const res = await fetch('https://api.lectoresbeta.com/api/leads', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: { email },
      }),
    });

    if (res.ok) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, message: 'Error en la solicitud' });
    }
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Error en el servidor' });
  }
}
