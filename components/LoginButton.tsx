'use client';
import { signIn } from 'next-auth/react';
import { Button } from './ui/button';

const LoginButton = () => {
  return (
    <div>
      <Button onClick={() => signIn('google', {}, { prompt: 'login' })}>ログイン</Button>
    </div>
  );
};

export default LoginButton;
