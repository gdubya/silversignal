import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { CheckInStatus, Role } from '@/generated/prisma/client';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = body.email || 'ola@leverdu.no'; // Default for MVP testing

    // 1. Find or Create the Senior User
    // In a real app, this would be handled by Auth, but for MVP we ensure the user exists.
    const user = await prisma.user.upsert({
      where: { email },
      update: {},
      create: {
        email,
        name: 'Ola Nordmann',
        role: Role.SENIOR,
      },
    });

    // 2. Create the CheckIn record
    const checkIn = await prisma.checkIn.create({
      data: {
        userId: user.id,
        status: CheckInStatus.CHECKED_IN,
      },
    });

    return NextResponse.json({ success: true, checkIn });
  } catch (error) {
    console.error('Check-in error:', error);
    return NextResponse.json(
      { error: 'Failed to register check-in' }, 
      { status: 500 }
    );
  }
}
