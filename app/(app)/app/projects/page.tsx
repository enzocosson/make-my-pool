/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable @next/next/no-img-element */
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
import { currentUser } from "@/auth/current-user";
import { Plus } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { AlertSubscription } from "../AlertSubscription/AlertSubscription";
import { toast } from "sonner";
import Footer from "../Footer/Footer";

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
        {/* <AlertSubscription /> */}
        <Footer />
        {projects.length === 0 ? (
          <div className={style.container__empty}>
            <p className={style.empty}>Aucun projet pour le moment.</p>
            <Link href="/app/projects/new" className={style.new}>
              <Plus size={16} />
              Nouveau projet
            </Link>
          </div>
        ) : (
          <div className="w-full flex flex-wrap justify-start gap-5">
            {projects.map((project) => (
              <Link
                href={`/app/projects/${project.slug}`}
                className={style.card}
                key={project.id}
              >
                <div className={style.img}>
                  <img
                    src={project.image || "/image/photo-empty.png"}
                    alt={`Image de ${project.title}`}
                  />
                </div>{" "}
                <div className={style.info}>
                  {project.title}
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Ellipsis />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Settings</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Link
                          className="w-full h-full"
                          href={`/app/projects/${project.slug}/edit`}
                        >
                          Modifier
                        </Link>
                        {/* <DeleteProject projectId={project.id} /> */}
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </Link>
            ))}
          </div>
        )}

        <img className={style.points__bg} src="/image/points-bg.svg" alt="" />
      </div>
    </>
  );
}
