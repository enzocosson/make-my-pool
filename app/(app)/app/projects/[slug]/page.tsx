/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable @next/next/no-img-element */
import { PrismaClient } from "@prisma/client";
import style from "./page.module.scss";
import Header from "../../Header/Header";

import { currentUser } from "@/auth/current-user";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function AppPage() {
  const user = await currentUser();

  if (!user) {
    redirect("/login");
  }

  const projects = await prisma.project.findMany({
    where: {
      userId: user.id,
    },
  });

  return (
    <>
      <Header user={user} />
      <div className={style.main}>
        <img className={style.points__bg} src="/image/points-bg.svg" alt="" />
      </div>
    </>
  );
}
