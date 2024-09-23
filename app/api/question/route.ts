import { NextResponse } from 'next/server';
import prisma from '../../../lib/prismaClient';

export async function GET() {
  try {
    const allQuestions = await prisma.question.findMany({
    });
    return NextResponse.json(allQuestions);
  } catch (error) {
    console.error('Error fetching questions:', error);
    return NextResponse.json({ error: 'データの取得に失敗しました' }, { status: 500 });
  }
}
