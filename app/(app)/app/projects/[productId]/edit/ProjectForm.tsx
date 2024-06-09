"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectSchema, ProjectType } from "./project.schema";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useZodForm,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMutation } from "react-query";
import { toast } from "sonner";
import { createProjectAction } from "./project.actions";
import { useRouter } from "next/navigation";

export type ProjectFormProps = {
  defaultValues?: ProjectType;
};

export const ProjectForm = (props: ProjectFormProps) => {
  const form = useZodForm({
    schema: ProjectSchema,
    defaultValues: props.defaultValues,
  });

  const isCreate = !Boolean(props.defaultValues);

  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (values: ProjectType) => {
      const { data, serverError } = await createProjectAction(values);

      if (serverError || !data) {
        toast.error(serverError);
        return;
      }

      toast.success("Projet créé avec succès!");

      router.push(`/projects/${data.id}`);
    },
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {isCreate
            ? "Créer un projet"
            : `Modifier le projet ${props.defaultValues?.title || ""}`}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form
          className="flex flex-col gap-4"
          form={form}
          onSubmit={async (values) => {
            await mutation.mutateAsync(values);
          }}
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Nom du projet" />
                </FormControl>
                <FormDescription>
                  Le nom du projet doit être unique.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="URL de l'image"
                    value={field.value || ""}
                  />
                </FormControl>
                <FormDescription>
                  L&apos;URL de l&apos;image doit être une URL valide.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">{isCreate ? "Créer" : "Modifier"}</Button>
        </Form>
      </CardContent>
    </Card>
  );
};
