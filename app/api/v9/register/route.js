import { NextResponse } from 'next/server';
import { prisma } from '@/prisma.ts';

export function GET() {
    return NextResponse.json({ success  : true });
}

export async function POST(request) {
    const { email, username, password } = request.body;
    console.log(email, username, password);
    const existingUser = await prisma.user.findFirst({
        where: {
            OR: [
                {
                    email,
                },
                {
                    username,
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

        console.log(user)

        // handle sessions by adding username to session
        request.session.set('username', username);

        return NextResponse.redirect('/login');
    }


    
    
}