import { NextResponse } from 'next/server';
import { prisma } from '@/prisma.ts';

export function GET() {
    return NextResponse.json({ success  : true });
}

export async function POST(request) {
    const { username, password } = request.body;
    console.log(username, password);
    const user = await prisma.user.findFirst({
        where: {
            username,
            password,
        },
    });
    console.log(user);
    if (user) {
        // handle sessions by adding username to session
        // request.session.set('username', username);
        // @TODO use iron session to handle sessions

        return NextResponse.redirect('/channel/@me');
    } else {
        return NextResponse.json({ message: 'Invalid username or password', success: false });
    }
}