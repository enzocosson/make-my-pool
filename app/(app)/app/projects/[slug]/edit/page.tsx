/* eslint-disable @next/next/no-img-element */
import { currentUser } from "@/auth/current-user";
import Header from "../../../Header/Header";
import { ProjectForm } from "./ProjectForm";
import style from "./page.module.scss";
import { prisma } from "@/lib/prisma";
import { PageParams } from "@/types/next";
import { notFound } from "next/navigation";

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

  if (!project) {
    notFound();
  }
  console.log("project", project);
  return (
    <>
      <Header />
      <div className={style.main}>
        <ProjectForm defaultValues={project} projectId={project.id} />

        <img className={style.points__bg} src="/image/points-bg.svg" alt="" />
      </div>
    </>
  );
}
