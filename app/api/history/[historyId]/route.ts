import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prismaClient';

// 特定の質問データとそれに関連する回答データを取得するAPI
export async function GET(request: Request, { params }: { params: { historyId: string } }) {
  const historyData = await prisma.question.findUnique({
    where: {
      id: parseInt(params.historyId), // historyIdに一致するquestionを取得
    },
    include: {
      answers: true, // 関連する回答も含めて取得
    },
  });

  if (!historyData) {
    return NextResponse.json({ error: 'Question not found' }, { status: 404 });
  }

  return NextResponse.json(historyData);
}
