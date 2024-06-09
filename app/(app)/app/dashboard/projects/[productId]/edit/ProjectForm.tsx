"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectSchema, ProjectType } from "./project.schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useZodForm,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export type ProjectFormProps = {
  defaultValues?: ProjectType;
};

export const ProjectForm = (props: ProjectFormProps) => {
  const form = useZodForm({
    schema: ProjectSchema,
    defaultValues: props.defaultValues,
  });

  const isCreate = !Boolean(props.defaultValues);

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {isCreate ? (
            <h1>Créer un projet</h1>
          ) : (
            <h1>{`Modifier le projet ${props.defaultValues?.title}`}</h1>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form
          form={form}
          onSubmit={async (values) => {
            console.log(values);
            alert("Form submitted!");
          }}
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Nommer le projet" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button>{isCreate ? "Créer" : "Modifier"}</Button>
        </Form>
      </CardContent>
    </Card>
  );
};
