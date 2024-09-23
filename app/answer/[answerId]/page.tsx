'use client'; // クライアントコンポーネントとして扱う

import AnswerForm from '@/components/AnswerForm';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

// APIから特定の質問データを取得する関数
async function getQuestionData(answerId: string) {
  const response = await fetch(`http://localhost:3000/api/question/${answerId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch question data');
  }
  const questionData = await response.json();
  return questionData;
}

const Page = ({ params }: { params: { answerId: string } }) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [questionData, setQuestionData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // ログインしていない場合はトップページにリダイレクト
    if (status === 'unauthenticated') {
      router.push('/');
    }

    // ログインしている場合はデータを取得
    if (status === 'authenticated') {
      const fetchData = async () => {
        try {
          const data = await getQuestionData(params.answerId);
          setQuestionData(data);
        } catch (err) {
          setError('データの取得に失敗しました');
        }
      };

      fetchData();
    }
  }, [status, router, params.answerId]);

  if (status === 'loading') {
    return <div>読み込み中...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!questionData) {
    return <div>データを読み込み中...</div>;
  }

  return (
    <div>
      <AnswerForm questionText={questionData.question_text} answerId={params.answerId} />
    </div>
  );
};

export default Page;
