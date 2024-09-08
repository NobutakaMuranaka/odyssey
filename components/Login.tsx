import React from "react";
import { useSession, signIn } from "next-auth/react";
import { Button } from "./ui/button";

export default function Login() {
  const { status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status !== "authenticated") {
    return (
      <div>
        <Button onClick={() => signIn("google", {}, { prompt: "login" })}>
          ログイン
        </Button>
      </div>
    );
  }
  return null;
}
