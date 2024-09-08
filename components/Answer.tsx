import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const Answer = ({ user_answer }: { user_answer: string }) => {
  return (
    <div>
      <div className="py-16 max-w-5xl m-auto block">
        <Card>
          <CardHeader>
            <CardContent>{user_answer}</CardContent>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default Answer;
