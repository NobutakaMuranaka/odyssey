import Question from '@/components/Question';
import React from 'react';

// サーバー側でデータをフェッチする関数
async function getQuestionAllData() {
  const response = await fetch('http://localhost:3000/api/question/', {
    cache: 'no-store',
  });
  if (!response.ok) {
    throw new Error('データの取得に失敗しました');
  }
  const questionAllData = await response.json();
  return questionAllData;
}

const Page = async () => {
  const questions = await getQuestionAllData();

  return (
    <div>
      <div className="max-w-5xl m-auto block">
        <h2 className="text-2xl mt-8">問題一覧</h2>
        {questions.length > 0 ? (
          questions.map((question: { id: number; question_text: string }) => (
            <Question
              key={question.id}
              id={question.id} // idを渡す
              question_text={question.question_text}
            />
          ))
        ) : (
          <p>読み込み中...</p>
        )}
      </div>
    </div>
  );
};

export default Page;
