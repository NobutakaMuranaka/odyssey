import { NextResponse } from 'next/server';
import prisma from '../../../lib/prismaClient';

export async function GET() {
  const allQuestions = await prisma.question.findMany();
  return NextResponse.json(allQuestions);
}
