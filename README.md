# Learning Management System: Next.js 13, React, Stripe, Mux, Prisma, Tailwind, MySQL

To Run this webapp follow these steps:

Step 1: run `npm i ` to download all the dependencies

Step 2: create a `.env ` file


`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=`
`CLERK_SECRET_KEY=`

`DATABASE_URL=`

`UPLOADTHING_SECRET=` 
`UPLOADTHING_APP_ID=`

`MUX_TOKEN_ID= `
`MUX_TOKEN_SECRET=`

`NEXT_PUBLIC_APP_URL= http://localhost:3000`

`NEXT_PUBLIC_TEACHER_ID= {Input your userID (you will get from clerk dashboard)}`

Step 3: run `npx prisma generate` to structurize the database 

Step 4: run `npx prisma db push` to push the schema to database

Step 5: run `node .\scripts\seed.ts` to enable the Catogories section

Step 6: run `npm run dev` to start the server

