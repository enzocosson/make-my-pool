"use client";
import { ReactNode, useEffect } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

interface AuthWrapperProps {
  children: ReactNode;
}

const AuthWrapper = ({ children }: AuthWrapperProps) => {
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
    return <>{children}</>;
  }

  return null;
};

export default AuthWrapper;
