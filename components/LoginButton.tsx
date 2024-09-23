'use client';
import { signIn } from 'next-auth/react';
import { Button } from './ui/button';

const LoginButton = () => {
  return (
    <div>
      <Button onClick={() => signIn('google', {}, { prompt: 'login' })}>今すぐ始める</Button>
    </div>
  );
};

export default LoginButton;
