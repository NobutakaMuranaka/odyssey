import Answer from '@/components/Answer';
import React from 'react';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

// APIから特定の質問データを取得する関数
async function getHistoryData(historyId: string) {
  const response = await fetch(`http://localhost:3000/api/history/${historyId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch history data');
  }
  const historyData = await response.json();
  return historyData;
}

const Page = async ({ params }: { params: { historyId: string } }) => {
  const historyData = await getHistoryData(params.historyId);

  return (
    <div className="py-16 max-w-5xl m-auto block">
      <Card>
        <CardHeader>
          <CardTitle>{historyData.question_text}</CardTitle>
        </CardHeader>
      </Card>
      {historyData.answers.length > 0 ? (
        historyData.answers.map((answer: { id: number; user_answer: string }) => (
          <Answer key={answer.id} user_answer={answer.user_answer} />
        ))
      ) : (
        <p>まだ回答がありません。</p>
      )}
    </div>
  );
};

export default Page;
