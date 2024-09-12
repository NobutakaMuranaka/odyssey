import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prismaClient';

// 回答データを取得 (既存のGET)
export async function GET(request: Request, { params }: { params: { answerId: string } }) {
  const answer = await prisma.answer.findMany({
    where: {
      question_id: parseInt(params.answerId),
    },
  });
  return NextResponse.json(answer);
}

// 回答データを保存 (新規POST)
export async function POST(request: Request, { params }: { params: { answerId: string } }) {
  const { user_answer } = await request.json();

  // ユーザーIDやその他の情報を取得する（例: セッション情報から）
  const userId = 1; // 仮のユーザーID。適切に取得する必要があります。

  const savedAnswer = await prisma.answer.create({
    data: {
      user_answer,
      user_id: userId,
      question_id: parseInt(params.answerId),
    },
  });

  return NextResponse.json(savedAnswer);
}
