'use server';
import Answer from '@/components/Answer';
import NavigateToTop from '@/components/hooks/NavigateToTop';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

async function getHistoryData(historyId: string) {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/history/${historyId}`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch history data');
  }

  return response.json();
}

const Page = async ({ params }: { params: { historyId: string } }) => {
  let historyData;

  try {
    historyData = await getHistoryData(params.historyId);
  } catch (error) {
    return <p>データの取得に失敗しました: {error.message}</p>;
  }

  return (
    <div className="py-16 max-w-5xl m-auto block">
      <NavigateToTop />
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
