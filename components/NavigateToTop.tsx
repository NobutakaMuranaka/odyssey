'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const NavigateToTop = () => {
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status !== 'authenticated') {
      router.push('/');
    }
  }, [status, router]);

  return null;
};

export default NavigateToTop;
