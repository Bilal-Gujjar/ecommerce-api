# Ecommerce API

This is a RESTful API for a simple e-commerce application built with Node.js, Express.js, and PostgreSQL. The API supports product management, cart management, order placement, authentication and authorization, and error handling. It also includes API documentation using Swagger.

## Features

- **Product Management**: Create, read, update, and delete products.
- **Cart Management**: Add products to the cart, remove products from the cart, and retrieve cart contents.
- **Order Placement**: Place orders and retrieve order details.
- **Authentication and Authorization**: User signup, login, and token-based authentication.
- **Error Handling**: Proper error handling and HTTP status codes for different scenarios.
- **API Documentation**: Interactive API documentation using Swagger.

## Technologies Used

- Node.js
- Express.js
- PostgreSQL
- Sequelize (ORM)
- JSON Web Token (JWT) for authentication
- Swagger for API documentation

## Prerequisites

- Node.js installed on your machine
- PostgreSQL installed and running

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/ecommerce-api.git
   cd ecommerce-api

    ```
2. Install the dependencies:

   ```bash
   npm install
   ```

## Environment Variables

Create a new file named `.env` in the root directory of the project. Add the following environment variables to the file:

```plaintext
DATABASE_URL=postgres://username:password@localhost:5432/ecommerce
JWT_SECRET=texagon-api-assignment
PORT=5000

```

Replace the values with your own configuration.

## Database Setup

1. Create a new PostgreSQL database.
2. Run the Seeder to create the tables:

   ```bash
   node seeder.js/mainSeeder.js
   ```

## Running the Application

To start the application, run:

```bash
npm start
```

The application will be available at `http://localhost:5000`.

## API Documentation

The API documentation is available at `http://localhost:5000/api-docs`.

## API Endpoints

The API endpoints are as follows:

### Auth

- `POST /api/auth/signup`: Create a new user
- `POST /api/auth/login`: User login

### Products

- `POST /api/products`: Create a new product
- `GET /api/products`: Retrieve a list of products
- `GET /api/products/:category`: Retrieve a list of products by category
- `PUT /api/products/:id`: Update a product
- `DELETE /api/products/:id`: Delete a product

### Carts

- `POST /api/carts`: Create a new cart
- `POST /api/carts/add`: Add a product to the cart
- `POST /api/carts/remove`: Remove a product from the cart
- `GET /api/carts/:userId`: Get the contents of a user's cart

### Orders

- `POST /api/orders`: Place an order
- `GET /api/orders/:orderId`: Get order details


## Happy Coding! 🚀
