"use client";
import { useSession } from "next-auth/react";
import type { PageParams } from "@/types/next";
import { Layout, LayoutTitle } from "@/components/Layout";
import { requireCurrentUser } from "@/auth/current-user";

const RoutePage = (props: PageParams<{}>) => {
  return (
    <Layout className="">
      <LayoutTitle>Produit</LayoutTitle>
    </Layout>
  );
};

export default RoutePage;
