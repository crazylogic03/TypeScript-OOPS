# Product Inventory System

> A Clean OOP-based CRUD Backend Application (Reference Style)

## Features
- **Class-based Architecture**: follows strict OOP patterns (Controllers, Services, Repositories).
- **Product CRUD**: Create, Read (All/One), Update, Delete.
- **Advanced Querying**: Pagination, Sorting, Search, Filter by Category & Price.

## Structure
```
src/
├── app.ts                  # Application Entry Class
├── server.ts               # Server Initialization
├── controllers/            # Request Handlers (Async Props)
├── services/               # Business Logic Layer
├── repositories/           # Data Access Layer
├── models/                 # Mongoose Models
├── routes/                 # Route Definitions
└── utils/                  # Interfaces & Types
```

## API Endpoints (`/api/v1/products`)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| POST | `/` | Create a new product |
| GET | `/` | Get all products (supports ?page=1&search=xyz) |
| GET | `/:id` | Get product by ID |
| PUT | `/:id` | Update product |
| DELETE | `/:id` | Delete product |

## Setup
1. `npm install`
2. `npm run dev`
