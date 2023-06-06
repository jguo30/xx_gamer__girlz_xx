import { NextResponse } from 'next/server';
import { prisma } from '@/prisma.ts';

export function GET() {
    return NextResponse.json({ success  : true });
}

export async function POST(request) {
    const { username, password } = request.body;
    const user = await prisma.user.findFirst({
        where: {
            username,
            password,
        },
    });
    console.log(user);
    if (user) {
        return NextResponse.redirect('/dashboard');
    } else {
        return NextResponse.json({ message: 'Invalid username or password', success: false });
    }
}