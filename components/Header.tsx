'use client'; // クライアントコンポーネントとして扱う

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import HeaderLoginButton from './HeaderLoginButton';

const Header = () => {
  const { data: session, status } = useSession();

  return (
    <header>
      <div className="flex justify-between px-8 pt-4 items-center">
        <h1>
          <Link href="/">
            <Image
              src="/Odyssey-logo.svg"
              alt="Odysseyロゴ"
              width={100}
              height={40}
              style={{ width: 'auto', height: 'auto' }}
            />
          </Link>
        </h1>
        <div className="flex gap-12 items-center">
          {/* ログイン済みの場合にのみ「問題一覧」リンクを表示 */}
          {status === 'authenticated' && (
            <Link href="/questions">
              <p>問題一覧</p>
            </Link>
          )}
          <HeaderLoginButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
