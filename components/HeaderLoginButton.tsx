'use client';
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image'; // Imageコンポーネントのインポート
import Logout from './Logout'; // Logoutコンポーネントのインポート
import { Button } from './ui/button';

const HeaderLoginButton = () => {
  const { data: session, status } = useSession();

  if (status === 'authenticated') {
    return (
      <div className="flex gap-6">
        <Logout /> {/* Logoutボタンを表示 */}
        <Image
          src={session?.user?.image ?? ``} // セッションデータの画像を表示
          alt="Googleアイコン"
          width={40}
          height={40}
          style={{ borderRadius: '50px' }}
        />
      </div>
    );
  }

  return (
    <div>
      <Button onClick={() => signIn('google', {}, { prompt: 'login' })}>
        ログイン
      </Button>
    </div>
  );
};

export default HeaderLoginButton;
