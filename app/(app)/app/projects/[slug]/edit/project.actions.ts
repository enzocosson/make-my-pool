"use server";
import { prisma } from "@/lib/prisma";
import { ActionError, userAction } from "@/safe-actions";
import { ProjectSchema } from "./project.schema";
import { z } from "zod";

const verifySlugUniqueness = async (slug: string, projectId?: string) => {
  const slugExists = await prisma.project.count({
    where: {
      slug: slug,
      id: projectId
        ? {
            not: projectId,
          }
        : undefined,
    },
  });

  if (slugExists > 0) {
    throw new ActionError("Slug already exists");
  }
};

export const createProjectAction = userAction(
  ProjectSchema,
  async (input, context) => {
    await verifySlugUniqueness(input.slug);

    const project = await prisma.project.create({
      data: {
        ...input,
        userId: context.user.id,
      },
    });

    return project;
  }
);

export const updateProjectAction = userAction(
  z.object({
    id: z.string(),
    data: ProjectSchema,
  }),
  async (input, context) => {
    await verifySlugUniqueness(input.data.slug, input.id);

    const updatedProject = await prisma.project.update({
      where: {
        id: input.id,
        userId: context.user.id,
      },
      data: input.data,
    });

    return updatedProject;
  }
);
