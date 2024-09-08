import { NextResponse } from "next/server";
import prisma from "../../../../lib/prismaClient";

export async function GET(req: Request) {
  const allAnswers = await prisma.answer.findMany();
  return NextResponse.json(allAnswers);
}
