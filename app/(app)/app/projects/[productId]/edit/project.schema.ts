import { z } from "zod";

export const ProjectSchema = z.object({
  title: z.string(),
  image: z.string(),
});

export type ProjectType = z.infer<typeof ProjectSchema>;
