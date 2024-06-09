/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable @next/next/no-img-element */
import { PrismaClient } from "@prisma/client";
import style from "./page.module.scss";
import Header from "../../Header/Header";

export default async function AppPage() {
  return (
    <>
      <Header />
      <div className={style.main}>
        <img className={style.points__bg} src="/image/points-bg.svg" alt="" />
      </div>
    </>
  );
}
