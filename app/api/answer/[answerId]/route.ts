import { NextResponse } from "next/server";
import prisma from "../../../../lib/prismaClient";

export async function GET(
  req: Request,
  { params }: { params: { answerId: string } }
) {
  const questionId = parseInt(params.answerId, 10);

  if (isNaN(questionId)) {
    return NextResponse.json({ error: "Invalid question ID" }, { status: 400 });
  }

  const question = await prisma.question.findUnique({
    where: { id: questionId },
  });

  if (!question) {
    return NextResponse.json({ error: "Question not found" }, { status: 404 });
  }

  return NextResponse.json(question);
}
