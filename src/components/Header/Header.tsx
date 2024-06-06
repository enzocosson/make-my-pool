/* eslint-disable tailwindcss/classnames-order */
import SignInButton from "@/components/SingInButton/SignInButton";
import Link from "next/link";
import React from "react";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <header className={style.main}>
      <div className="px-8 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center justify-content gap-10 text-center  sm:text-left">
            <h1 className="text-white text-2xl font-bold sm:text-3xl">
              MakeMy
              <span
                className="
                font-normal"
              >
                Pool
              </span>
            </h1>
            <Link className={style.link} href="/qui-sommes-nous">
              Qui sommes-nous ?
            </Link>
            <Link className={style.link} href="/nous-contacter">
              Nous contacter
            </Link>
          </div>

          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <SignInButton />
            <div className={style.try__free}>Essayer gratuitement</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
