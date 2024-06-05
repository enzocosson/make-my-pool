import { Layout, LayoutTitle } from "@/components/Layout";
import type { PageParams } from "@/types/next";

export default async function RoutePage(props: PageParams<{}>) {
  return (
    <Layout className="">
      <LayoutTitle>Dashboard</LayoutTitle>
    </Layout>
  );
}
