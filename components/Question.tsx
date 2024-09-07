import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Question = () => {
  return (
    <div>
      <div className="my-8">
        <Card>
          <CardHeader>
            <CardDescription>React</CardDescription>
            <CardTitle>
              Reduxはどのようにstateを管理しているか説明してください。Reduxはどのようにstateを管理しているか説明してください。
            </CardTitle>
          </CardHeader>
          <div className="p-4 text-end">
            <Button className="mr-4">回答する</Button>
            <Button variant="outline">回答履歴を表示</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Question;
