# Lang Assess Backend

> GraphQL API

## Set up dev environment

- Run npm install
- Create a `.env` file in the root folder of the project, and fill with environment variables. Check the `.env.example` file as guide.
- Create another `.env` file in the `prisma` folder. Equally check the `prisma/.env.example` file as guide for the content.
- Run the command `npx prisma migrate up --experimental` to create a local database using the infos set in the `prisma/.env` file.
- Run the command `npx ts-node prisma/seed.ts` to fill your database with initial data.
- Run the command `npm run dev` to start your local GraphQL server.
- Open the GraphQL playground in your browser at the address: http://localhost:4000
