import React from 'react';
import LoginButton from '@/components/LoginButton';
import { Button } from '../components/ui/button';
import Link from 'next/link';

export default async function Home() {
  return (
    <div>
      <div className="h-full">
        <div className="text-center mt-4 py-28">
          <h1 className="text-5xl">
            フロントエンド技術の学習サイト
            <br />
            Odyssey
          </h1>
          <p className="text-2xl mt-4">答えのない、思考の旅に出よう。</p>
          <div className="mt-8 mb-4">
            <LoginButton />
          </div>
          <Link href="/questions">
            <Button variant="outline">問題一覧</Button>
          </Link>
          <p className="text-slate-400 text-xs mt-2">
            ※ログインしない場合は、回答情報が保存されません。
          </p>
        </div>
      </div>
    </div>
  );
}
