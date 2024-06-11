/* eslint-disable @next/next/no-img-element */
import Header from "../../Header/Header";
import { ProjectForm } from "../[slug]/edit/ProjectForm";
import style from "./page.module.scss";

import { currentUser } from "@/auth/current-user";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function AppPage() {
  const user = await currentUser();

  const allProject = await prisma.project.findMany({
    where: {
      userId: user?.id,
    },
  });

  if (!user) {
    redirect("/login");
  } else if (user.subscription === "FREE" && allProject.length >= 1) {
    redirect("/app/projects");
  }

  return (
    <>
      <Header user={user} />
      <div className={style.main}>
        <ProjectForm />
        <img className={style.points__bg} src="/image/points-bg.svg" alt="" />
      </div>
    </>
  );
}
