import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-600 text-center text-white p-4">
      <ul className="flex justify-center gap-20 mb-2">
        <li>
          <Link href="/terms-of-service">利用規約</Link>
        </li>
        <li>
          <Link href="/privacy-policy">プライバシーポリシー</Link>
        </li>
        <li>
          <a
            href="https://x.com/ayatakaa_chan"
            target="_blank"
            rel="noopener noreferrer"
          >
            運営者情報
          </a>
        </li>
      </ul>
      <p>Copyright © Odyssey</p>
    </div>
  );
};

export default Footer;
