'use client'; // クライアントコンポーネントとして扱う

import Question from '@/components/Question';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Page = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // ログインしていない場合はTOPページにリダイレクト
    if (status === 'unauthenticated') {
      router.push('/');
    }

    // ログインしている場合はデータを取得
    if (status === 'authenticated') {
      const getQuestionAllData = async () => {
        const response = await fetch('/api/question/', {
          cache: 'no-store',
        });
        if (response.ok) {
          const data = await response.json();
          setQuestions(data);
        } else {
          console.error('データの取得に失敗しました');
        }
      };
      getQuestionAllData();
    }
  }, [status, router]);

  // ログイン確認中はローディング状態を表示
  if (status === 'loading') {
    return <div>読み込み中...</div>;
  }

  // 質問データがある場合は表示
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
