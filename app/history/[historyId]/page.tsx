'use client'; // クライアントコンポーネントとして扱う

import Answer from '@/components/Answer';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

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

const Page = ({ params }: { params: { historyId: string } }) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [historyData, setHistoryData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // ログインしていない場合はTOPページにリダイレクト
    if (status === 'unauthenticated') {
      router.push('/');
    }

    // ログインしている場合はデータを取得
    if (status === 'authenticated') {
      const fetchData = async () => {
        try {
          const data = await getHistoryData(params.historyId);
          setHistoryData(data);
        } catch (err) {
          setError('データの取得に失敗しました');
        }
      };

      fetchData();
    }
  }, [status, router, params.historyId]);

  if (status === 'loading') {
    return <div>読み込み中...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!historyData) {
    return <div>データを読み込み中...</div>;
  }

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
