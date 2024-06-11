/* eslint-disable tailwindcss/classnames-order */
import React from "react";
import { Button } from "@/components/ui/button";
import style from "./NewProjectButton.module.scss";
import { Plus } from "lucide-react";
import { redirect } from "next/navigation";
import { User } from "../../../../types";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const NewProjectButton = ({ user }: { user: User }) => {
  const router = useRouter();

  if (!user) {
    redirect("/login");
  }

  const isProSubscription = user?.subscription === "PRO";

  return (
    <>
      {isProSubscription ? (
        <Button
          variant="outline"
          className={style.new}
          onClick={() => {
            router.push("/app/projects/new");
          }}
        >
          <Plus size={16} />
          Nouveau projet
        </Button>
      ) : (
        <Button
          variant="outline"
          className={style.new__disable}
          onClick={() => {
            toast.error(
              "Vous devez avoir un abonnement Pro pour créer un projet."
            );
          }}
        >
          <Plus size={16} />
          Nouveau projet
        </Button>
      )}
    </>
  );
};
