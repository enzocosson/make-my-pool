/* eslint-disable tailwindcss/enforces-shorthand */
/* eslint-disable tailwindcss/classnames-order */
"use client";
import React from "react";
import { useSession, signOut, signIn } from "next-auth/react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, LogIn } from "lucide-react";
import style from "./SignInButton.module.scss";

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
      <button onClick={() => signIn()} className={style.sing__in}>
        <LogIn size={18} className="mr-2" />
        Se connecter
      </button>
    </div>
  );
};

export default SignInButton;
