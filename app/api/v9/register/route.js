import { NextResponse } from 'next/server';
import { prisma } from '@/prisma.ts';

export function GET() {
    return NextResponse.json({ success  : true });
}

export async function POST(request) {
    const { email, username, password } = request.body;

    const user = await prisma.user.create({
        data: {
            email,
            username,
            password,
        },
    });


    
    
}