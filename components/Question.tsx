'use client';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { useRouter } from 'next/navigation';

const Question = ({ question_text, id }: { question_text: string; id: number }) => {
  const router = useRouter();

  const handleAnswerClick = () => {
    router.push(`/answer/${id}`);
  };

  const handleHistoryClick = () => {
    router.push(`/history/${id}`);
  };

  return (
    <div className="my-8">
      <Card className="justify-between flex">
        <CardHeader>
          <CardTitle className="text-lg">{question_text}</CardTitle>
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
