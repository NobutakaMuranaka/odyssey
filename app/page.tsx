import LoginButton from '@/components/LoginButton';
import Image from 'next/image';

export default async function Home() {
  return (
    <div>
      <div className="h-full">
        <div className="text-center mt-4 py-28">
          <h1 className="text-5xl">
            React特化の学習サイト
            <br />
            Odyssey
          </h1>
          <p className="text-2xl mt-4">答えのない、思考の旅に出よう。</p>
          <div className="mt-8 mb-4">
            <LoginButton />
          </div>
        </div>
        <div className="flex">
          <div className="m-auto flex gap-5">
            <Image
              src="/React_logo.svg"
              alt="Reactロゴ"
              width={100}
              height={40}
              style={{ width: 'auto', height: 'auto' }}
            />
            <Image
              src="/Nextjs_logo.svg"
              alt="Nextjsロゴ"
              width={100}
              height={40}
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>
        </div>
        <div className="text-center p-28 px-96">
          <h2 className="text-3xl mb-5">Odysseyとは</h2>
          <h3 className="text-2xl mb-3">特徴1　自己対話型の学習スタイル</h3>
          <p className="mb-10">
            Odysseyは、Reactに関する問いを取り上げた哲学ノートです。正解が一つではない問いについて自己対話を通して考え、結論を求めるのではなく、より深い理解を追求します。Odysseyはクイズアプリではなく、単に知識を問うものではありません。Reactのアプリケーション開発における真理を探し、自分自身の思考を整理してノートにまとめることで、深く考える力を養います。
          </p>
          <h3 className="text-2xl mb-3">特徴2　ノートの記録と成長</h3>
          <p className="mb-10">
            Odysseyでは、過去に記録したノートを見返すことで、自己の成長を確認することができます。ノートはあくまで記録として残り、編集はできませんが、「破り捨てる（削除）」ことは可能です。これは、自分の考えやプロセスを大切にし、深く思考することを重視しているためです。
          </p>
          <h3 className="text-2xl mb-3">特徴3　シンプルでモダンなデザイン</h3>
          <p className="mb-10">
            白と黒を基調にしたモダンなデザインで、広告などを排除し、自己対話に集中できる環境を提供します。
          </p>
        </div>
        <div className="text-center py-28">
          <h2 className="text-3xl mb-5">答えのない、思考の旅に出よう。</h2>
          <p>Googleアカウントで簡単ログイン</p>
          <div className="mt-8 mb-4">
            <LoginButton />
          </div>
        </div>
      </div>
    </div>
  );
}
