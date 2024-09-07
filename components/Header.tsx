"use client";
import React from "react";
import Login from "./Login";
import Logout from "../components/Logout";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Header = () => {
  const { data: session, status } = useSession();
  return (
    <header>
      <div className="flex justify-between px-8 pt-4 items-center">
        <h1>
          <Link href="/">
            <img src="/Odyssey-logo.svg" />
          </Link>
        </h1>
        {status === "authenticated" ? (
          <div className="flex gap-6">
            <Logout />
            <img
              src={session.user?.image ?? ``}
              alt=""
              style={{ borderRadius: "50px", width: "40px" }}
            />
          </div>
        ) : (
          <Login />
        )}
      </div>
    </header>
  );
};

export default Header;
