# AirbnbClone

AirbnbClone-Next is a web application built with Next.js and TypeScript that allows users to browse, search, and book properties for rent. It also allows property owners to create and manage their own listings. (built for learning purposes)

##Features

- User authentication with email, Google, and GitHub.
- Property search by location, price.
- Property listing with images, description.
- Property booking with calendar and reservation management.
- Image upload using Cloudinary.

## Technology stack

- Next.js
- TypeScript
- MongoDB
- Prisma
- Cloudinary
- Tailwind CSS
- Zustand

## Getting Started

To get started with the Notes Application, follow these steps:

- Clone the repository to your local machine using Git: `git clone https://github.com/GigaBerdzenishvili/AirbnbClone-Next`
- Install dependencies `npm install`
- Setup `.env` file

  - DATABASE_URL=
  - GOOGLE_CLIENT_ID=
  - GOOGLE_CLIENT_SECRET=
  - GITHUB_ID=
  - GITHUB_SECRET=
  - NEXTAUTH_SECRET=

- Setup prisma
  ` npx prisma db push`
- Start the app
  `npm run dev`
