'use client';
import { signIn } from 'next-auth/react';
import { Button } from './ui/button';

export default function LoginButton() {
  return (
    <div className="mt-8 mb-4">
      <Button onClick={() => signIn('google', {}, { prompt: 'login' })}>今すぐ始める</Button>
    </div>
  );
}
