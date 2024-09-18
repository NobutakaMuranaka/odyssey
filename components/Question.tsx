'use client'; // クライアントコンポーネントとしてマーク

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { useRouter } from 'next/navigation'; // useRouterをインポート

const Question = ({ question_text, id }: { question_text: string; id: number }) => {
  const router = useRouter();

  const handleAnswerClick = () => {
    // 回答するボタンがクリックされたら、/answer/[id] に遷移
    router.push(`/answer/${id}`);
  };

  const handleHistoryClick = () => {
    // 回答するボタンがクリックされたら、/answer/[id] に遷移
    router.push(`/history/${id}`);
  };

  return (
    <div className="my-8">
      <Card className="justify-between flex">
        <CardHeader>
          <CardTitle>{question_text}</CardTitle>
        </CardHeader>
        <div className="p-4 text-end flex items-center">
          <Button className="mr-4" onClick={handleAnswerClick}>
            回答する
          </Button>
          <Button variant="outline" onClick={handleHistoryClick}>
            回答履歴を表示
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Question;
