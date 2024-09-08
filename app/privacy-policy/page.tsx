import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">プライバシーポリシー</h1>
      <p>
        本プライバシーポリシーは、本アプリにおいて収集される個人情報の取り扱いに関する方針を定めたものです。
      </p>

      <h2 className="text-2xl font-semibold mt-4">第1条（個人情報の収集）</h2>
      <p>
        本アプリでは、ユーザーが入力した回答や履歴を保存するために個人情報を収集する場合があります。
      </p>

      <h2 className="text-2xl font-semibold mt-4">第2条（個人情報の利用目的）</h2>
      <p>収集した個人情報は、以下の目的で利用します：</p>
      <ul className="list-disc list-inside">
        <li>ユーザーの学習履歴を保存し、サービスを提供するため</li>
        <li>サービス改善のための分析に使用するため</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-4">第3条（第三者提供）</h2>
      <p>収集した個人情報は、法令に基づく場合を除き、第三者に提供することはありません。</p>
    </div>
  );
};

export default PrivacyPolicy;
