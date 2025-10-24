## 🧠 Jdocks Backend — Express + MongoDB API

### 📋 Overview

This backend is a Node.js + Express API that connects to a MongoDB database using **Mongoose**.
It supports CRUD operations for **Users**, **Items**, and **Carts**, and includes logging, global error handling, and environment configuration.

---

### ⚙️ Tech Stack

* **Node.js** — Server runtime
* **Express.js** — Web framework
* **MongoDB + Mongoose** — Database and schema modeling
* **dotenv** — Environment variable management
* **CORS** — Cross-Origin Resource Sharing (for connecting frontend)
* **Custom Middleware** — Logger and Global Error Handler

---

### 📁 Project Structure

```
Jdocks_Backend/
│
├── db/
│   └── conn.mjs              # MongoDB connection setup
│
├── Middleware/
│   ├── logger.mjs            # Logs each request method and path
│   └── GlbErr.mjs            # Centralized global error handler
│
├── models/
│   ├── userSchema.mjs        # User model (username, email, password, admin, cart)
│   ├── itemSchema.mjs        # Inventory item model
│   └── cartSchema.mjs        # Cart model
│
├── routes/
│   ├── users.mjs             # User CRUD routes
│   ├── itemRoutes.mjs        # Item CRUD routes
│   └── cartRoutes.mjs        # Cart CRUD routes
│
├── .env                      # Environment variables (PORT, MONGO_URI, etc.)
├── package.json
├── server.mjs                # Main Express server setup
└── README.md
```

---

### 🚀 Getting Started

#### 1️⃣ Clone the repository

```bash
git clone <your_repo_url>
cd Jdocks_Backend
```

#### 2️⃣ Install dependencies

```bash
npm install
```

#### 3️⃣ Create a `.env` file

```bash
PORT=3000
MONGO_URI=mongodb+srv://<your_db_user>:<your_db_pass>@cluster.mongodb.net/<db_name>
```

#### 4️⃣ Start the server

```bash
npm start
```

The server will run at
👉 **[http://localhost:3000](http://localhost:3000)**

---

### 🧩 API Routes

#### **User Routes** (`/user`)

| Method | Endpoint    | Description                    |
| ------ | ----------- | ------------------------------ |
| GET    | `/user/`    | Get all users                  |
| GET    | `/user/:id` | Get a single user              |
| POST   | `/user/`    | Create a new user              |
| PUT    | `/user/:id` | Update user info or admin role |
| DELETE | `/user/:id` | Delete a user                  |

#### **Item Routes** (`/item`)

| Method | Endpoint    | Description     |
| ------ | ----------- | --------------- |
| GET    | `/item/`    | Get all items   |
| GET    | `/item/:id` | Get single item |
| POST   | `/item/`    | Add a new item  |
| PUT    | `/item/:id` | Update an item  |
| DELETE | `/item/:id` | Delete an item  |

#### **Cart Routes** (`/cart`)

| Method | Endpoint    | Description           |
| ------ | ----------- | --------------------- |
| GET    | `/cart/`    | Get all carts         |
| GET    | `/cart/:id` | Get a user's cart     |
| POST   | `/cart/`    | Create new cart entry |
| PUT    | `/cart/:id` | Update cart           |
| DELETE | `/cart/:id` | Delete cart           |

---

### 🧰 Middleware

#### **Logger**

Logs each incoming request with method and path.

```js
GET - /item
POST - /user
```

#### **Global Error Handler**

Catches unhandled errors and sends structured JSON responses.

---

### 🧑‍💼 Admin Access

* Any user with `{ admin: true }` in their document is treated as an admin.
* You can manually create one via **MongoDB Compass** or **Mongo Shell**:

  ```js
  db.users.insertOne({
    username: "admin",
    email: "admin@example.com",
    password: "securepassword",
    admin: true
  })
  ```

---

### 🔗 Frontend Connection

https://github.com/Anaconder/Jdocks_FE.git
