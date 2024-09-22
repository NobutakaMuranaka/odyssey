import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prismaClient';

// 特定の質問データを取得するGETリクエスト
export async function GET(request: Request, { params }: { params: { answerId: string } }) {
  const question = await prisma.question.findUnique({
    where: {
      id: parseInt(params.answerId), // answerIdに一致するidを取得
    },
  });

  if (!question) {
    return NextResponse.json({ error: 'Question not found' }, { status: 404 });
  }

  return NextResponse.json(question); // 質問データを返す
}
