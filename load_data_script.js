const { PrismaClient } = require("@prisma/client");
const fs = require("fs");
const cuid = require("cuid");

const prisma = new PrismaClient();

async function main() {
  const usersData = JSON.parse(fs.readFileSync("users_fixture.json", "utf-8"));

  for (const userData of usersData) {
    // Générer un ID aléatoire pour chaque utilisateur
    const userId = cuid();

    // Créer l'utilisateur avec les données fournies
    const user = await prisma.user.create({
      data: {
        id: userId,
        name: userData.name,
        email: userData.email,
        emailVerified: new Date(userData.emailVerified),
        image: userData.image,
        subscription: userData.subscription,
      },
    });

    // Créer une session pour l'utilisateur
    await prisma.session.create({
      data: {
        id: cuid(), // Générer un ID aléatoire pour la session
        sessionToken: cuid(), // Générer un token de session aléatoire
        expires: new Date(), // Définir la date d'expiration de la session
        user: {
          connect: {
            id: user.id, // Connecter la session à l'utilisateur créé
          },
        },
      },
    });

    // Créer un compte pour l'utilisateur
    await prisma.account.create({
      data: {
        id: cuid(), // Générer un ID aléatoire pour le compte
        userId: user.id, // Connecter le compte à l'utilisateur créé
        type: "default", // Définir le type de compte
        provider: "local", // Définir le fournisseur du compte
        providerAccountId: user.id, // Utiliser l'ID de l'utilisateur comme ID du compte
      },
    });

    if (userData.projects && userData.projects.length > 0) {
      for (const projectData of userData.projects) {
        await prisma.project.create({
          data: {
            id: cuid(), // Générer un ID aléatoire pour le projet
            title: projectData.title,
            image: projectData.image,
            userId: user.id, // Connecter le projet à l'utilisateur créé
          },
        });
      }
    }

    // Afficher un message pour indiquer que les données ont été chargées avec succès
    console.log(`User ${user.name} data loaded successfully`);
  }

  // Afficher un message pour indiquer que toutes les données ont été chargées avec succès
  console.log("All users data loaded successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
