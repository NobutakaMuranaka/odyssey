import AnswerForm from "@/components/AnswerForm";
import React from "react";

// APIから特定の質問データを取得する関数
async function getQuestionData(answerId: string) {
  const response = await fetch(`http://localhost:3000/api/answer/${answerId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch question data");
  }
  const questionData = await response.json();
  return questionData;
}

const Page = async ({ params }: { params: { answerId: string } }) => {
  const questionData = await getQuestionData(params.answerId);

  return (
    <div>
      <AnswerForm questionText={questionData.question_text} />
    </div>
  );
};

export default Page;
