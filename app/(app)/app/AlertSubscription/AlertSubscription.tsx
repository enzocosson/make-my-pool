/* eslint-disable tailwindcss/classnames-order */
import React from "react";
import style from "./AlertSubscription.module.scss";
import Link from "next/link";
import { redirect } from "next/navigation";
import { User } from "../../../../types";

export const AlertSubscription = () => {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <h1>Abonnement</h1>
      </div>
      <div className={style.content}>
        <p>
          Vous n'avez pas d'abonnement actif. Vous pouvez en souscrire un en
          cliquant sur le bouton ci-dessous.
        </p>
        <Link href="/app/subscription" className={style.button}>
          Souscrire
        </Link>
      </div>
    </div>
  );
};
