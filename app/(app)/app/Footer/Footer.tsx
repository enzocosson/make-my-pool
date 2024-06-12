/* eslint-disable tailwindcss/classnames-order */
"use client";
import React from "react";
import style from "./Footer.module.scss";
import Link from "next/link";
import { Undo2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className={style.main}>
      <Link href="/">
        <Undo2 size={16} />
        Retour au site web
      </Link>
    </footer>
  );
};

export default Footer;
