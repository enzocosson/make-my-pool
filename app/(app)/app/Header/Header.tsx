/* eslint-disable tailwindcss/classnames-order */
"use client";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import style from "./Header.module.scss";
import LoggedInDropdown from "../LoggedInDropdown/LoggedInDropdown";
import { Home } from "lucide-react";
import Link from "next/link";
import { NewProjectButton } from "../NewProjectButton/NewProjectButton";
import { User } from "../../../../types";
import { useRouter } from "next/navigation";

const Header = ({ user }: { user: User }) => {
  const router = useRouter();

  if (!user) {
    router.push("/login");
    return null;
  }

  return (
    <header className={style.main}>
      <div className={style.container__link}>
        <Link href="/app/projects" className={style.home}>
          <Home size={16} />
        </Link>
        <NewProjectButton user={user} />
      </div>

      <h1 className={style.header__title}>
        <Link href="/app/projects">
          MakeMy<span>Pool</span>
        </Link>
        <p>/</p>
        <p>Dashboard</p>
      </h1>

      <div className={style.container__info__header}>
        <LoggedInDropdown>
          <div className={style.user}>
            <div className={style.name}>{user.name}</div>
            <Avatar>
              <AvatarFallback>{user.name?.[0]}</AvatarFallback>
              {user.image ? (
                <AvatarImage src={user.image} alt="Avatar" />
              ) : null}
            </Avatar>
          </div>
        </LoggedInDropdown>
      </div>
    </header>
  );
};

export default Header;
