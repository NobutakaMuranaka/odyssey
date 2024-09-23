'use client'; // この行を追加して、Client Componentとしてマーク

import LoginButton from '@/components/LoginButton';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // next/router ではなく next/navigation を使用
import { useEffect } from 'react';

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // ログイン済みの場合、問題一覧ページにリダイレクト
    if (status === 'authenticated') {
      router.push('/questions');
    }
  }, [status, router]);

  // ログイン確認中はローディング状態を表示
  if (status === 'loading') {
    return <div>読み込み中...</div>;
  }

  return (
    <div>
      <div className="h-full">
        <div className="text-center mt-4 py-28">
          <h1 className="text-5xl">
            React特化の学習サイト
            <br />
            Odyssey
          </h1>
          <p className="text-2xl mt-4">答えのない、思考の旅に出よう。</p>
          <div className="mt-8 mb-4">
            <LoginButton />
          </div>
        </div>
        <div className="flex">
          <div className="m-auto flex gap-5">
            <Image
              src="/React_logo.svg"
              alt="Reactロゴ"
              width={100}
              height={40}
              style={{ width: 'auto', height: 'auto' }}
            />
            <Image
              src="/Nextjs_logo.svg"
              alt="Nextjsロゴ"
              width={100}
              height={40}
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>
        </div>
        <div className="text-center p-28 px-96">
          <h2 className="text-3xl mb-5">Odysseyとは</h2>
          <h3 className="text-2xl mb-3">特徴1 深い理解を促す学習体験</h3>
          <p className="mb-10">
            Odysseyは、答えのない問いに取り組むことで、考える力を養います。問題には複数の視点があり、結論を出すことを目的とせず、自分自身の思考を整理し、より深く掘り下げるプロセスが求められます。
          </p>
          <h3 className="text-2xl mb-3">特徴2 ノートで成長を記録</h3>
          <p className="mb-10">
            Odysseyでは、思考の過程をノートに記録していくことができ、後から見返すことで自分の成長を実感できます。ノートの内容は削除することも可能ですが、編集はできないため、過去の自分の考えをそのまま残しておくことができます。
          </p>
          <h3 className="text-2xl mb-3">特徴3 シンプルで集中できるデザイン</h3>
          <p className="mb-10">
            白と黒を基調としたシンプルでモダンなデザインを採用し、広告を排除しています。これにより、自己の思考に集中できる環境を提供します。
          </p>
        </div>
        <div className="text-center py-28">
          <h2 className="text-3xl mb-5">答えのない、思考の旅に出よう。</h2>
          <p>Googleアカウントで簡単ログイン</p>
          <div className="mt-8 mb-4">
            <LoginButton />
          </div>
        </div>
      </div>
    </div>
  );
}
