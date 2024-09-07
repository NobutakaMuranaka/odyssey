import Question from "@/components/Question";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="max-w-5xl m-auto block">
        <h2 className="text-2xl mt-8">問題一覧</h2>
        <Question />
        <Question />
        <Question />
      </div>
    </div>
  );
};

export default page;
