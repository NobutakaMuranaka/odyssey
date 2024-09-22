import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prismaClient';

// 質問データを取得 (GET)
export async function GET(request: Request, { params }: { params: { answerId: string } }) {
  // answerIdに対応する質問データを取得
  const question = await prisma.question.findUnique({
    where: {
      id: parseInt(params.answerId), // answerIdに一致するquestion_idを使用
    },
  });

  if (!question) {
    return NextResponse.json({ error: 'Question not found' }, { status: 404 });
  }

  return NextResponse.json(question);
}

// 回答データを保存 (POST)
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
