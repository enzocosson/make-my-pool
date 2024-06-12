/* eslint-disable @next/next/no-img-element */
import { currentUser } from "@/auth/current-user";
import Header from "../../../Header/Header";
import { ProjectForm } from "./ProjectForm";
import style from "./page.module.scss";
import { prisma } from "@/lib/prisma";
import { PageParams } from "@/types/next";
import { notFound } from "next/navigation";
import { redirect } from "next/navigation";
import HeaderConception from "../../../HeaderConception/HeaderConception";

export default async function AppPage(
  props: PageParams<{
    slug: string;
  }>
) {
  const user = await currentUser();

  const project = await prisma.project.findUnique({
    where: {
      slug: props.params.slug,
      userId: user?.id,
    },
  });

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

  if (!project) {
    notFound();
  }

  return (
    <>
      <HeaderConception user={user} />
      <div className={style.main}>
        <ProjectForm defaultValues={project} projectId={project.id} />

        <img className={style.points__bg} src="/image/points-bg.svg" alt="" />
      </div>
    </>
  );
}
