'use server';
import NavigateToTop from '@/components/NavigateToTop';
import Question from '@/components/Question';

const Page = async () => {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/question/`, {
    cache: 'no-store',
  });

  let questions = [];

  if (response.ok) {
    questions = await response.json();
  } else {
    console.error('データの取得に失敗しました');
  }

  return (
    <div>
      <NavigateToTop />
      <div className="max-w-5xl m-auto block pb-10">
        <h2 className="text-2xl mt-8 text-center">問題一覧</h2>
        {questions.length > 0 ? (
          questions.map((question: { id: number; question_text: string }) => (
            <Question key={question.id} id={question.id} question_text={question.question_text} />
          ))
        ) : (
          <p>問題が見つかりませんでした</p>
        )}
      </div>
    </div>
  );
};

export default Page;
