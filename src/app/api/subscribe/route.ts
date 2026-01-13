import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Ugyldig e-postadresse' },
        { status: 400 }
      );
    }

    try {
      const subscriber = await prisma.subscriber.create({
        data: {
          email,
        },
      });
      return NextResponse.json({ success: true, subscriber });
    } catch (e: any) {
      if (e.code === 'P2002') {
        // Unique constraint failed, email already exists
        return NextResponse.json(
          { error: 'E-postadressen er allerede registrert.' },
          { status: 409 }
        );
      }
      throw e;
    }
  } catch (error) {
    console.error('Request error', error);
    return NextResponse.json(
      { error: 'Noe gikk galt under registreringen.' },
      { status: 500 }
    );
  }
}
