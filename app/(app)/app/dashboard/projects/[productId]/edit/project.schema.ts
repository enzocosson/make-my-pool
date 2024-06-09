import { z } from "zod";

export const ProjectSchema = z.object({
  id: z.string().cuid(),
  title: z.string(),
  image: z.string(),
  userId: z.string().nonempty(), // ID de l'utilisateur associé
  createdAt: z.date().default(new Date()), // Utilisation de la date actuelle par défaut
});

export type ProjectType = z.infer<typeof ProjectSchema>;
