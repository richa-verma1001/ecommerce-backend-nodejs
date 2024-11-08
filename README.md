# Node.js API Project

### Overview
A Node.js API application for managing data, with CRUD operations, pagination, and authentication. Built with Node.js, Express, and MongoDB.

### Features
- User Authentication (Auth0)
- CRUD operations
- Error handling and logging
- Pagination and filtering

### Setup Instructions
1. Clone the repository.
2. Install dependencies with `npm install`.
3. Configure environment variables in `.env`.
4. Start the app: `npm start`.

### APIs
GET /api/category

GET /api/category/:id

GET /api/products

GET /api/products/:id

GET /api/users

GET /api/user/:id

POST /api/category

POST /api/product

POST /api/user

DELETE /api/products/:id

DELETE /api/user/:id

### ENV variables
PORT

MONGO_URL

#### CI/CD
Auto deployed to Render



@copyright data reused from https://fakeapi.platzi.com/
