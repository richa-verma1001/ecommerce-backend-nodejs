#### Build and Run

npm install
npm run

#### About

Service API to for ecommerce application

#### APIs

GET /api/category
GET /api/category/:id

GET /api/products
GET /api/products/:id

GET /api/users
GET /api/user/:id

POST /api/category

- Categrory Schema:

```name: {
    type: String,
    required: true,
  }
```

POST /api/product

- Product schema:
  {
  name: {
  type: String,
  required: true, // Name is required
  },
  quantity: {
  type: Number,
  required: true, // Quantity is required
  min: 0, // Optional: you might want to prevent negative quantities
  },
  price: {
  type: Number,
  },
  navtive_currency: {
  type: String,
  },
  category: {
  type: String,
  }
  }

POST /api/user
-User Schema: {name: required, email: required, password: required, age}

DELETE /api/products/:id
DELETE /api/user/:id

#### ENV variables

PORT
MONGO_URL

#### CI/CD

Auto deployed to Render
