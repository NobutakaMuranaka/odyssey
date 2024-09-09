'use client';
import { signIn, useSession } from 'next-auth/react';
import { Button } from './ui/button';

const LoginButton = () => {
  const { data: session, status } = useSession();

  if (status === 'authenticated') {
    return null;
  }

  return (
    <div>
      <Button onClick={() => signIn('google', {}, { prompt: 'login' })}>ログイン</Button>
    </div>
  );
};

export default LoginButton;