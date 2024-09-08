import { NextResponse } from "next/server";
import prisma from "@/lib/prismaClient";

export async function GET(
  req: Request,
  { params }: { params: { historyId: string } }
) {
  const { historyId } = params;

  try {
    const questionWithAnswers = await prisma.question.findUnique({
      where: { id: Number(historyId) }, // historyIdに該当する質問を取得
      include: {
        answers: true, // 関連する回答を含める
      },
    });

    if (!questionWithAnswers) {
      return NextResponse.json(
        { message: "Question not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(questionWithAnswers);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch question and answers" },
      { status: 500 }
    );
  }
}
