import { NextResponse } from 'next/server';
import { prisma } from './db'

export function GET() {
    return NextResponse.json({ success  : true });
}