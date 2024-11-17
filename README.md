# 🚀 SaaS Application

A complete, end-to-end SaaS application built from scratch using modern technologies and best practices. This project is designed to be scalable, user-friendly, and efficient, offering a strong foundation for any SaaS business.

## Overview

This project features a robust SaaS platform with a beautiful landing page, flexible subscription plans, real-time API streaming, and advanced AI capabilities. It leverages cutting-edge technologies to provide an exceptional user experience and efficient backend processing.

## Features

- **Complete SaaS Built From Scratch**: A full-fledged, scalable SaaS application designed for businesses.
- **Beautiful Landing Page & Pricing Page**: Attractive and responsive landing and pricing pages crafted to engage users and convert leads.
- **Free & Pro Plan Using Stripe**: Seamless integration with Stripe for subscription management, supporting both free and pro plans.
- **Highly Functional PDF Viewer**: An intuitive and user-friendly PDF viewer for enhanced document interactions.
- **Real-Time API Streaming**: Provides real-time streaming of API responses for a dynamic and engaging user experience.
- **Authentication Using Kinde**: Secure and efficient user authentication with Kinde.
- **Modern UI with 'shadcn-ui'**: A sleek and responsive user interface built using 'shadcn-ui'.
- **Optimistic UI Updates**: Smooth user experience with optimistic UI updates.
- **Infinite Message Loading**: Efficient infinite loading for enhanced performance in message-heavy components.
- **Drag and Drop File Uploads**: Intuitive drag-and-drop functionality for easy file uploads.
- **Instant Loading States**: Quick feedback to users through instant loading indicators.
- **Modern Data Fetching Using tRPC & Zod**: Type-safe and efficient data fetching with tRPC and Zod.
- **AI Memory with LangChain**: Advanced AI memory management powered by LangChain.
- **Vector Storage Using Pinecone**: Scalable vector storage solutions with Pinecone.
- **Prisma as ORM**: Robust database management using Prisma for type-safe interactions.
- **100% Written in TypeScript**: Fully developed with TypeScript for better maintainability and scalability.

## Technologies Used

- **Frontend**: Next.js, TypeScript, Shadcn UI
- **Authentication**: Kinde
- **Payment Integration**: Stripe
- **Database**: Prisma (using PostgreSQL or any supported database)
- **Data Fetching**: tRPC, Zod
- **AI Memory**: LangChain
- **Vector Storage**: Pinecone
- **File Uploads**: Drag-and-drop functionality
- **PDF Viewing**: Custom PDF viewer
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) (LTS version recommended)
- [Stripe Account](https://stripe.com/) (for payment integration)
- [Kinde Account](https://kinde.com/) (for authentication)
- [PostgreSQL](https://www.postgresql.org/) (or any database supported by Prisma)
- [Git](https://git-scm.com/)

### Clone the Repository

```
git clone https://github.com/your-username/SaaS-Application.git
cd SaaS-Application
```
Install the project dependencies:

```
npm install
```

Configure environment variables:

Create a .env file based on .env.example and provide the required API keys and configuration settings:

```
DATABASE_URL=your-database-url
STRIPE_SECRET_KEY=your-stripe-secret-key
KIND_AUTH_KEY=your-kinde-auth-key
PINECONE_API_KEY=your-pinecone-api-key
```

Database Setup
Initialize the database using Prisma:

```
npx prisma migrate dev
Generate Prisma client:
```

```
npx prisma generate
```
Running the Development Server
Start the development server locally:

```
npm run dev
```
Open the application in your browser:

```
http://localhost:3000
```
Testing
The project includes comprehensive unit tests. To run tests, use:

```
npm test
```

🌐 Deployment
Deploying to Vercel
Make sure you have the Vercel CLI installed and logged in:

```
npm i -g vercel
```
vercel login
Deploy the application:

```
vercel --prod
```
Set environment variables in the Vercel dashboard for API keys and configurations.

Stripe Webhooks
Set up Stripe webhooks for real-time updates:

```
stripe listen --forward-to http://localhost:3000/api/webhooks/stripe
```
# Acknowledgments
Next.js Documentation: For comprehensive guidance on building a Next.js app.
Stripe: For seamless payment processing and subscription management.
LangChain & Pinecone: For AI memory and vector storage solutions.
Prisma: For simplifying database management with a type-safe ORM.
Vercel: For effortless deployment and hosting.
