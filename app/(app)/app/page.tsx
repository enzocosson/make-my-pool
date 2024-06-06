/* eslint-disable tailwindcss/enforces-shorthand */
/* eslint-disable tailwindcss/classnames-order */
"use client";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const AppPage = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      redirect(`/login`);
    }
  }, [status]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "authenticated") {
    return (
      <div>
        <h1>Bienvenue dans l'application de modélisation 3D</h1>
      </div>
    );
  }

  return null;
};

export default AppPage;
