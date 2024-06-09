"use server";
import { prisma } from "@/lib/prisma";
import { ActionError, userAction } from "@/safe-actions";
import { ProjectSchema } from "./project.schema";

export const createProjectAction = userAction(
  ProjectSchema,
  async (input, context) => {
    const slugExists = await prisma.project.count({
      where: {
        slug: input.slug,
      },
    });

    if (slugExists > 0) {
      throw new ActionError("Slug already exists");
    }

    const project = await prisma.project.create({
      data: {
        ...input,
        userId: context.user.id,
      },
    });

    return project;
  }
);

export const editProjectAction = async () => {
  // Implement your edit project logic here
};
