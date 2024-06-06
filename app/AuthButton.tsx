"use client";
import React from "react";
import { signIn, signOut } from "next-auth/react";

export const LoginButton = () => {
  return (
    <button
      className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
      onClick={() => signIn()}
    >
      Se connecter
    </button>
  );
};

export const LogoutButton = () => {
  return (
    <button
      className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
      onClick={() => signOut()}
    >
      Se déconnecter
    </button>
  );
};
