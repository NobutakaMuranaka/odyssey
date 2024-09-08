import React from 'react';
import { useSession, signOut } from 'next-auth/react';

export default function Logout() {
  const { status } = useSession();

  if (status === 'authenticated') {
    return (
      <div className="flex items-center">
        <button onClick={() => signOut()}>ログアウト</button>
      </div>
    );
  }
  return null;
}
