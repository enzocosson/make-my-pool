"use server";
import { prisma } from "@/lib/prisma";
import { userAction } from "@/safe-actions";
import { ProjectSchema } from "./project.schema";

export const createProjectAction = userAction(
  ProjectSchema,
  async (input, context) => {
    const project = await prisma.project.create({
      data: {
        ...input,
        userId: context.user.id,
      },
    });

    return project;
  }
);

export const editProjectAction = async () => {};
