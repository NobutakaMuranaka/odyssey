'use server';
import AnswerForm from '@/components/AnswerForm';
import NavigateToTop from '@/components/NavigateToTop';

async function getQuestionData(answerId: string) {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/question/${answerId}`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch question data');
  }
  return response.json();
}

const Page = async ({ params }: { params: { answerId: string } }) => {
  let questionData;

  try {
    questionData = await getQuestionData(params.answerId);
  } catch (error) {
    return <p>データの取得に失敗しました: {error.message}</p>;
  }

  return (
    <div>
      <NavigateToTop />
      <AnswerForm questionText={questionData.question_text} answerId={params.answerId} />
    </div>
  );
};

export default Page;
