import type { PageParams } from "@/types/next";

export default async function RoutePage(props: PageParams<{}>) {
  return (
    <div className="container mx-auto px-4 py-8">
      <p className="text-center text-xl font-bold ">Hello world</p>
    </div>
  );
}
