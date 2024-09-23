'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

const HeaderLoginButton = () => {
  const { data: session, status } = useSession();

  if (status === 'authenticated') {
    return (
      <div className="flex gap-6 items-center">
        <div className="flex gap-5">
          <Link href="/questions">
            <p>問題一覧</p>
          </Link>
          <button onClick={() => signOut()}>ログアウト</button>
        </div>
        {session?.user?.image && (
          <Image
            src={session.user.image}
            alt="Googleアイコン"
            width={40}
            height={40}
            className="rounded-full"
          />
        )}
      </div>
    );
  } else {
    return <Button onClick={() => signIn('google', {}, { prompt: 'login' })}>ログイン</Button>;
  }
};

export default HeaderLoginButton;
