import React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

// propsにquestionTextを受け取るように変更
const AnswerForm = ({ questionText }: { questionText: string }) => {
  return (
    <div>
      <div className="py-16 max-w-5xl m-auto block">
        <Card>
          <CardHeader>
            <CardTitle>{questionText}</CardTitle>
          </CardHeader>
        </Card>
        <div className="mt-8">
          <Textarea />
        </div>
        <div className="mt-8 text-end">
          <Button>回答を保存</Button>
        </div>
      </div>
    </div>
  );
};

export default AnswerForm;
