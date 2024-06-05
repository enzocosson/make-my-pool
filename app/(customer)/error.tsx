"use client";

import { Layout } from "@/components/Layout";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import SignInButton from "@/features/layout/SignInButton";

export default function RouteError() {
  return (
    <Layout>
      <Card>
        <CardHeader>
          <CardTitle>Sorry</CardTitle>
        </CardHeader>
        <CardFooter>
          <SignInButton />
        </CardFooter>
      </Card>
    </Layout>
  );
}
