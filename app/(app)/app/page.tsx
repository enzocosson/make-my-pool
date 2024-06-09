import { PrismaClient } from "@prisma/client";
import style from "./page.module.scss";
import Header from "./Header/Header";
import { auth } from "@/auth/auth";
import { Ellipsis } from "lucide-react";
import { redirect } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DeleteProject from "@/components/DeleteProject/DeleteProject";
import Link from "next/link";

const prisma = new PrismaClient();

export default async function AppPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  const projects = await prisma.project.findMany({
    where: {
      userId: session.user.id,
    },
  });

  return (
    <>
      <Header />
      <div className={style.main}>
        {projects.map((project) => (
          <Link
            href={`/app/dashboard/projects/${project.id}`}
            className={style.card}
            key={project.id}
          >
            <div className={style.img}>
              <img src={project.image} alt={`Image de ${project.title}`} />
            </div>{" "}
            <div className={style.info}>
              {project.title}
              <DropdownMenu>
                <DropdownMenuTrigger>
                  {" "}
                  <Ellipsis />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Settings</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <DeleteProject projectId={project.id} />
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </Link>
        ))}
        <img className={style.points__bg} src="/image/points-bg.svg" alt="" />
      </div>
    </>
  );
}
