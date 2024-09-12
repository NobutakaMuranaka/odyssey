"use client"
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const AnswerForm = ({ questionText, answerId }: { questionText: string; answerId: string }) => {
  // 回答の状態を管理する
  const [userAnswer, setUserAnswer] = useState('');

  // 回答を保存する関数
  const handleSaveAnswer = async () => {
    try {
      const response = await fetch(`/api/answer/${answerId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_answer: userAnswer,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to save answer');
      }

      alert('回答が保存されました！');
    } catch (error) {
      console.error('Error:', error);
      alert('回答の保存に失敗しました。');
    }
  };

  return (
    <div>
      <div className="py-16 max-w-5xl m-auto block">
        <Card>
          <CardHeader>
            <CardTitle>{questionText}</CardTitle>
          </CardHeader>
        </Card>
        <div className="mt-8">
          <Textarea value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)} />
        </div>
        <div className="mt-8 text-end">
          <Button onClick={handleSaveAnswer}>回答を保存</Button>
        </div>
      </div>
    </div>
  );
};

export default AnswerForm;
