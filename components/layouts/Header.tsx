import Image from 'next/image';
import Link from 'next/link';
import HeaderLoginSection from './HeaderLoginSection';

const Header = () => {
  return (
    <header>
      <div className="flex justify-between px-8 pt-4 items-center">
        <p>
          <Link href="/">
            <Image
              src="/Odyssey-logo.svg"
              alt="Odysseyロゴ"
              width={100}
              height={40}
              style={{ width: 'auto', height: 'auto' }}
            />
          </Link>
        </p>
        <HeaderLoginSection />
      </div>
    </header>
  );
};

export default Header;
