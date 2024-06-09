import { PrismaClient } from "@prisma/client";
import React from "react";

const prisma = new PrismaClient();

function DeleteProject({ projectId }: { projectId: string }) {
  const handleDelete = async () => {
    try {
      await prisma.project.delete({
        where: {
          id: projectId,
        },
      });
      alert("Le projet a été supprimé avec succès !");
    } catch (error) {
      alert("Une erreur s'est produite lors de la suppression du projet.");
      console.error(error);
    }
  };

  return <button onClick={handleDelete}>Supprimer</button>;
}

export default DeleteProject;
