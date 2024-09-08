import { useSession } from 'next-auth/react';
import LoginButton from './LoginButton';

export default function Login() {
  const { status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status !== 'authenticated') {
    return (
      <div>
        <LoginButton />
      </div>
    );
  }
  return null;
}
