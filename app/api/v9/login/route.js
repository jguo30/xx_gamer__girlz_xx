import { NextResponse } from 'next/server';
import { prisma } from './db'

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
    if (user) {
        return NextResponse.redirect('/dashboard');
    } else {
        return NextResponse.redirect('/login');
    }
}