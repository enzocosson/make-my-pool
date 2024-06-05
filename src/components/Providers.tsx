"use client";
import { SessionProvider } from "next-auth/react";
import React, { PropsWithChildren, ReactNode } from "react";
import { ThemeProvider } from "../features/theme/ThemeProvider";
import { Toaster } from "./ui/sonner";

interface Props {
  children: ReactNode;
}

export type ProvidersProps = PropsWithChildren;

export const Providers = (props: PropsWithChildren) => {
  return (
    <SessionProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Toaster />
        {props.children}
      </ThemeProvider>
    </SessionProvider>
  );
};

export default Providers;
