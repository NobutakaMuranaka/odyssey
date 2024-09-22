import Answer from '@/components/Answer';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

// APIから特定の質問データを取得する関数
async function getHistoryData(historyId: string) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'; // 環境変数を使用
  const response = await fetch(`${apiUrl}/api/history/${historyId}`, {
    cache: 'no-store',
  });

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
          <CardTitle>{historyData.question_text}</CardTitle> {/* 質問を表示 */}
        </CardHeader>
      </Card>
      {historyData.answers.length > 0 ? ( // 回答がある場合に表示
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
