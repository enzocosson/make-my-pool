/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable @next/next/no-img-element */
import style from "./page.module.scss";
import { currentUser } from "@/auth/current-user";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import HeaderConception from "../../HeaderConception/HeaderConception";
import Footer from "../../Footer/Footer";
import { CanvasComponent } from "@/components/CanvasConception/CanvasConception";

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
      <HeaderConception user={user} />
      <div className={style.main}>
        <Footer />
        <CanvasComponent />
        <img className={style.points__bg} src="/image/points-bg.svg" alt="" />
      </div>
    </>
  );
}
