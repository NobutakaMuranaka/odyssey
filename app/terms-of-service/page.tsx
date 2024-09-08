import React from 'react';

const TermsOfService = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">利用規約</h1>
      <p>
        本利用規約は、本アプリの使用条件を定めるものです。ユーザーは本アプリを使用することで、本利用規約に同意したものとみなされます。
      </p>

      <h2 className="text-2xl font-semibold mt-4">第1条（適用）</h2>
      <p>本利用規約は、ユーザーと本アプリの運営者との間のすべての関係に適用されます。</p>

      <h2 className="text-2xl font-semibold mt-4">第2条（禁止事項）</h2>
      <p>ユーザーは、以下の行為を行ってはなりません：</p>
      <ul className="list-disc list-inside">
        <li>法令または公序良俗に違反する行為</li>
        <li>サーバーやネットワークの機能を妨害する行為</li>
        <li>他のユーザーのデータを不正に取得または使用する行為</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-4">第3条（免責事項）</h2>
      <p>
        運営者は、ユーザーが本アプリを利用することにより被った損害について一切の責任を負いません。
      </p>
    </div>
  );
};

export default TermsOfService;
