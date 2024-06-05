/* eslint-disable tailwindcss/enforces-shorthand */
/* eslint-disable tailwindcss/classnames-order */
"use client";
import React from "react";
import { useSession, signOut, signIn } from "next-auth/react";
import { Button } from "../../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, LogIn } from "lucide-react";

const SignInButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="flex items-center space-x-4">
        <Avatar className="w-8 h-8">
          <AvatarFallback className="text-white bg-gray-500">
            {session.user.name?.[0]}
          </AvatarFallback>
          {session.user.image ? (
            <AvatarImage
              src={session.user.image}
              alt={`Photo de Profil de ${session.user.name ?? "-"}`}
              className="rounded-full"
            />
          ) : null}
        </Avatar>

        <Button
          variant="outline"
          size="sm"
          onClick={() => signOut()}
          className="bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-100"
        >
          <LogOut size={16} className="mr-2" />
          Se déconnecter
        </Button>
      </div>
    );
  }
  return (
    <div className="flex items-center">
      <Button
        onClick={() => signIn()}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        <LogIn size={16} className="mr-2" />
        Se connecter
      </Button>
    </div>
  );
};

export default SignInButton;
