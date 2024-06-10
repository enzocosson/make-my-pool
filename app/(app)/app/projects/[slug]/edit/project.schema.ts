import { z } from "zod";

export const ProjectSchema = z.object({
  title: z.string().min(1),
  image: z.string().url().optional().nullable(),
  slug: z
    .string()
    .regex(/^[a-zA-Z0-9_-]*$/)
    .min(3)
    .max(50),
});

export type ProjectType = z.infer<typeof ProjectSchema>;
