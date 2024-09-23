'use client';

import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Button } from './ui/button';

export default function LoginSection() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/questions');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <div>読み込み中...</div>;
  }

  return (
    <div>
      <div className="mt-8 mb-4">
        <Button onClick={() => signIn('google', {}, { prompt: 'login' })}>今すぐ始める</Button>
      </div>
    </div>
  );
}
