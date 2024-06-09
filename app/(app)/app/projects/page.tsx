import { PrismaClient } from "@prisma/client";
import style from "./page.module.scss";
import Header from "../Header/Header";
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
import Image from "next/image";
import { requireCurrentUser } from "@/auth/current-user";

const prisma = new PrismaClient();

export default async function AppPage() {
  const user = await requireCurrentUser();

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
      <Header />
      <div className={style.main}>
        {projects.length === 0 ? (
          <p className={style.empty}>Aucun projet pour le moment</p>
        ) : (
          <>
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
          </>
        )}
        <img className={style.points__bg} src="/image/points-bg.svg" alt="" />
      </div>
    </>
  );
}
