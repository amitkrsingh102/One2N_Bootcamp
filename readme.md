# Student Management API

A RESTful API service built with Express.js and TypeScript for managing student records. This service provides endpoints for creating, reading, updating, and deleting student information.

## Features

-   RESTful API endpoints for student management
-   TypeScript support for better type safety and developer experience
-   PostgreSQL database integration
-   Database migrations using TypeORM
-   Environment-based configuration
-   Comprehensive logging
-   Health check endpoint
-   API versioning
-   Unit tests with Jest
-   Docker support for local development

## Tech Stack

-   Node.js
-   Express.js
-   TypeScript
-   PostgreSQL
-   Prisma (for database migrations and ORM)
-   Jest (for testing)
-   Winston (for logging)
-   Docker & Docker Compose

## Prerequisites

-   Node.js (v18 or higher)
-   Package Manager (one of the following):
    -   npm (v8 or higher)
    -   yarn (v1.22 or higher)
    -   pnpm (v8 or higher)
-   Docker & Docker Compose

## Local Setup

1. Clone the repository:

```bash
git clone https://github.com/yourusername/student-management-api.git
cd student-management-api
```

2. Install dependencies (choose one):

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install
```

3. Set up environment variables:

```bash
cp .env.example .env
```

4. Start the PostgreSQL database using Docker:

```bash
docker-compose up -d
```

5. Generate Prisma client and run migrations (choose one):

```bash
# Using npm
npx prisma generate
npx prisma migrate dev

# Using yarn
yarn prisma generate
yarn prisma migrate dev

# Using pnpm
pnpm dlx prisma generate
pnpm dlx prisma migrate dev
```

6. Start the development server (choose one):

```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev
```

The API will be available at `http://localhost:3000`.

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
NODE_ENV=development
PORT=3000
LOG_LEVEL=info

# Database
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/student_db?schema=public"

# API Version
API_VERSION=v1
```

## API Endpoints

All endpoints are prefixed with `/api/v1`

### Health Check

```
GET /api/v1/healthcheck
```

### Student Management

#### Create a new student

```
POST /api/v1/students
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "dateOfBirth": "2000-01-01",
  "studentId": "STU001"
}
```

#### Get all students

```
GET /api/v1/students
```

#### Get a specific student

```
GET /api/v1/students/:id
```

#### Update a student

```
PUT /api/v1/students/:id
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Smith",
  "email": "john.smith@example.com",
  "dateOfBirth": "2000-01-01",
  "studentId": "STU001"
}
```

#### Delete a student

```
DELETE /api/v1/students/:id
```

## Database Schema

The Prisma schema for the student model:

```prisma
// schema.prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model Student {
  id          String   @id @default(uuid())
  studentId   String   @unique @map("student_id")
  firstName   String   @map("first_name")
  lastName    String   @map("last_name")
  email       String   @unique
  dateOfBirth DateTime @map("date_of_birth")
  createdAt   DateTime @default(now()) @map("created_at")
  updatedAt   DateTime @updatedAt @map("updated_at")

  @@map("students")
}
```

## Available Make Commands

-   `make install` - Install project dependencies
-   `make dev` - Start development server
-   `make build` - Build the TypeScript project
-   `make test` - Run unit tests
-   `make test-coverage` - Run tests with coverage report
-   `make db-up` - Start PostgreSQL database container
-   `make db-down` - Stop PostgreSQL database container
-   `make prisma-generate` - Generate Prisma client
-   `make prisma-migrate` - Run database migrations
-   `make prisma-studio` - Open Prisma Studio for database visualization
-   `make lint` - Run ESLint
-   `make format` - Format code using Prettier

## Project Structure

```
.
├── src/
│   ├── config/           # Configuration files
│   ├── controllers/      # Request handlers
│   ├── middlewares/      # Express middlewares
│   ├── prisma/          # Prisma schema and migrations
│   ├── routes/          # API routes
│   ├── services/        # Business logic
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Utility functions
│   └── app.ts          # Express app setup
├── tests/              # Test files
├── postman/            # Postman collection
├── Dockerfile         # Docker configuration
├── docker-compose.yml # Docker compose configuration
├── Makefile          # Make commands
├── package.json      # Dependencies and scripts
└── tsconfig.json    # TypeScript configuration
```

## Running Tests

```bash
# Run all tests
make test

# Run tests with coverage
make test-coverage
```

## API Documentation

A complete Postman collection is available in the `postman` directory. Import the collection into Postman to test the API endpoints.

## Logging

The API uses Winston for logging with the following log levels:

-   ERROR: For error events
-   WARN: For warning events
-   INFO: For informational messages
-   DEBUG: For debugging purposes

Logs are written to both console and file outputs.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details
