import React from "react";
import { useSession, signIn } from "next-auth/react";
import { Button } from "./ui/button";
import LoginButton from "./LoginButton";

export default function Login() {
  const { status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status !== "authenticated") {
    return (
      <div>
        <LoginButton />
      </div>
    );
  }
  return null;
}
