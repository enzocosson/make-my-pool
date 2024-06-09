import { PrismaClient } from "@prisma/client";
import style from "./page.module.scss";
import Header from "../../Header/Header";

const prisma = new PrismaClient();

export default async function AppPage() {
  const id = "id";

  const projects = await prisma.project.findMany({
    where: {
      userId: id,
    },
  });

  return (
    <>
      <Header />
      <div className={style.main}>
        <h1>{id}</h1>
        <img className={style.points__bg} src="/image/points-bg.svg" alt="" />
      </div>
    </>
  );
}
