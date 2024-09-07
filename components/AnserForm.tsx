import React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const AnserForm = () => {
  return (
    <div>
      <div className="py-16 max-w-5xl m-auto block">
        <Card>
          <CardHeader>
            <CardDescription>React</CardDescription>
            <CardTitle>
              Reduxはどのようにstateを管理しているか説明してください
            </CardTitle>
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

export default AnserForm;
