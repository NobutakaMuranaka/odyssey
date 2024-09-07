"use client";
import Image from "next/image";
import Login from "./components/Login";
import Logout from "./components/Logout";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {status === "authenticated" ? (
        <div>
          <p>セッションの期限：{session.expires}</p>
          <p>ようこそ、{session.user?.name}さん</p>
          <img
            src={session.user?.image ?? ``}
            alt=""
            style={{ borderRadius: "50px" }}
          />
          <div>
            <Logout />
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}
