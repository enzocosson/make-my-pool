/* eslint-disable tailwindcss/enforces-shorthand */
/* eslint-disable tailwindcss/classnames-order */
"use client";
import React from "react";
import { useSession, signOut, signIn } from "next-auth/react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, LogIn } from "lucide-react";
import style from "./SignInButton.module.scss";
import Link from "next/link";

const SignInButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="flex items-center space-x-4">
        <button className={style.sing__out} onClick={() => signOut()}>
          <LogOut size={16} className="mr-2" />
          Se déconnecter
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-10">
      <Link
        href="http://localhost:3000/login?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F"
        className={style.sing__in}
      >
        <LogIn size={18} className="mr-2" />
        Se connecter
      </Link>
    </div>
  );
};

export default SignInButton;
