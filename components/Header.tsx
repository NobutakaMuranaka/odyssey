import Image from 'next/image';
import Link from 'next/link';
import HeaderLoginButton from './HeaderLoginButton';

const Header = () => {
  return (
    <header>
      <div className="flex justify-between px-8 pt-4 items-center">
        <h1>
          <Link href="/">
            <Image
              src="/Odyssey-logo.svg"
              alt="Odysseyロゴ"
              width={100}
              height={40}
              style={{ width: 'auto', height: 'auto' }}
            />
          </Link>
        </h1>
        <div className="flex gap-12 items-center">
          <Link href="/questions">
            <p>問題一覧</p>
          </Link>
          <HeaderLoginButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
