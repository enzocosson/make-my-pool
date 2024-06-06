import Header from "@/components/Header";
import type { LayoutParams } from "@/types/next";

export default async function RouteLayout(props: LayoutParams<{}>) {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4">{props.children}</div>
    </div>
  );
}
