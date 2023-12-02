
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Config

# Next.js ATP-FRONT
Para correr localmente, se necesita la base de datos.
```
docker-compose up -d
npx prisma db push
```

[Fix Prisma with Docker and MongoDB](https://www.youtube.com/watch?v=mj5MxsEiHe8) - How fix connections between Prisma, MongoDB and Docker.


* El -d, significa __detached__

## Configurar las variables de entorno
Renombrar el archivo __.env.template__ a __.env__
* MongoDB URL Local:
```
MONGO_URL=mongodb://localhost:27017/trelloclonedb
```
Existe una carpeta config (.gitignore)

<!-- - [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial. -->

## Install ui components:
- Lucide react
- npx shadcn-ui@latest
- npx shadcn-ui@latest add skeleton
- npx shadcn-ui@latest add sheet (mobile sidebar)
- npm i zustand (mobile sidebar)

// One Prisma install, check:

1.  npm i -D prisma (database)
2.  npx prisma init (create the schema.prisma file)
3.  Create a model (table) on the schema.prisma
4.  npx prisma generate (refresh models)
5.  npx prisma db push (upload to a db and restart the app)
6.  npm i @prisma/client
7. Create the db file on libs folder 


Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
3. Run prisma db pull to turn your database schema into a Prisma schema.
4. Run prisma generate to generate the Prisma Client. You can then start querying your database.

## Need:
- Logo as .svg
- Create Clerk App [Clerk App](https://clerk.com/)
