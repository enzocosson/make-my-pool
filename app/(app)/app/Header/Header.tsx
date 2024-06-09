/* eslint-disable tailwindcss/classnames-order */
"use client";

import React from "react";
import { useSession, signOut } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import style from "./Header.module.scss";
import LoggedInDropdown from "../LoggedInDropdown/LoggedInDropdown";
import { ChevronDown, Plus } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const { data: session } = useSession();

  if (!session || !session.user) {
    return null;
  }

  return (
    <header className={style.main}>
      <LoggedInDropdown>
        <div className={style.user}>
          <Avatar>
            <AvatarFallback>{session.user.name?.[0]}</AvatarFallback>
            {session.user.image ? (
              <AvatarImage src={session.user.image} alt="Avatar" />
            ) : null}
          </Avatar>
          <div className={style.name}>
            {session.user.name}
            <ChevronDown size={16} className={style.arrow} />
          </div>
        </div>
      </LoggedInDropdown>

      <h1 className={style.header__title}>
        <Link href="/app">
          MakeMy<span>Pool</span>
        </Link>
        <p>/</p>
        <p>Dashboard</p>
      </h1>

      <Link href="/app/projects/new" className={style.new}>
        <Plus size={16} />
        Nouveau projet
      </Link>
    </header>
  );
};

export default Header;
