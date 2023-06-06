import { NextResponse } from 'next/server';
import { prisma } from '@/prisma.ts';

export function GET() {
    return NextResponse.json({ success  : true });
}

export async function POST(request) {
    const { email, username, password } = request.body;

    const existingUser = await prisma.user.findFirst({
        where: {
            OR: [
                {
                    email: email,
                },
                {
                    username: username,
                },
            ],
        }
    });

    console.log(existingUser);
    if (existingUser) {
        return NextResponse.json({ message: 'User already exists', success: false });
    } else {
        const user = await prisma.user.create({
            data: {
                email: email,
                username: username,
                password: password,
            },
        });
    }


    
    
}