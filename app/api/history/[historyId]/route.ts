import prisma from '@/lib/prismaClient';
import { NextResponse } from 'next/server';

export async function GET(req: Request, { params }: { params: { historyId: string } }) {
  const { historyId } = params;

  try {
    const questionWithAnswers = await prisma.question.findUnique({
      where: { id: Number(historyId) },
      include: {
        answers: true,
      },
    });

    if (!questionWithAnswers) {
      return NextResponse.json({ message: 'Question not found' }, { status: 404 });
    }

    return NextResponse.json(questionWithAnswers);
  } catch (error) {
    console.error('Error fetching question and answers:', error);
    return NextResponse.json({ error: 'Failed to fetch question and answers' }, { status: 500 });
  }
}
