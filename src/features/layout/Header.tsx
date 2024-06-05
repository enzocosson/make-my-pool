/* eslint-disable tailwindcss/classnames-order */
import SignInButton from "@/features/layout/SignInButton";
import React from "react";
import { ModeToggle } from "../theme/ModeToggles";
import { Layout } from "@/components/Layout";

const Header = () => {
  return (
    <Layout className="h-16 w-full flex gap-4 justify-between items-center mx-auto bg-blue-600 p-5">
      <h1 className="text-white text-3xl font-bold">
        MakeMy<span className="text-yellow-400 font-thin">Pool</span>
      </h1>
      <div className="flex items-center gap-4">
        <ModeToggle />
        <SignInButton />
      </div>
    </Layout>
  );
};

export default Header;