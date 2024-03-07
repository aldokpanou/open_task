# open_task - Gestion des tâches avec NestJS et Swagger

## Description
Un projet de gestion des tâches développé avec NestJS, un framework pour Node.js, et Swagger pour la documentation de l'API.

## Fonctionnalités
- Création, lecture, mise à jour et suppression (CRUD) des tâches.
- Documentation de l'API avec Swagger.
- Gestion de la priorité et du statut des tâches.
- Recherche de tâches par titre ou description.
- Validation des données avec class-validator.
- Persistance des données avec Prisma ORM.

## Technologies utilisées
- NestJS
- Swagger
- TypeScript
- Prisma ORM
- PostgreSQL (ou autre base de données)
- class-validator

## Installation
1. Cloner le dépôt GitHub : `git clone https://github.com/aldokpanou/open_task.git`
2. Installer les dépendances : `npm install`
3. Configurer la base de données dans le fichier `ormconfig.json`
4. Créer la base de données : `npm run prisma:db:create`
5. Appliquer les migrations : `npm run prisma:migrate`
6. Lancer l'application : `npm run start:dev`

## Utilisation
1. Accéder à l'API via l'URL : `http://localhost:3000/api`
2. Consulter la documentation Swagger pour découvrir les endpoints disponibles.

## Contributions
Les contributions sont les bienvenues ! Si vous souhaitez contribuer à ce projet, veuillez ouvrir une issue pour discuter des changements que vous souhaitez apporter.


