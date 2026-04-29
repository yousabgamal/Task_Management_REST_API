# Task Management REST API

A RESTful API for managing tasks built with Node.js, Express, and MongoDB.  
This project implements authentication, authorization, and full CRUD operations with a clean and scalable architecture.

---

##  Features

- User Authentication (Register / Login)
- JWT-based Authorization
- Role-Based Access Control (RBAC)
- Create, Read, Update, Delete (CRUD) Tasks
- Secure password hashing using bcrypt
- Modular MVC architecture
- Error handling middleware
- MongoDB database integration with Mongoose

---

##  Tech Stack

- Node.js
- Express.js
- MongoDB & Mongoose
- JSON Web Token (JWT)
- bcrypt.js
- dotenv

---

##  Project Structure

```
/controllers    -> Business logic
/models         -> Mongoose schemas
/routes         -> API routes
/middlewares    -> Auth & error handling
/config         -> DB configuration
server.js       -> Entry point
```

---

##  Installation

```bash
# Clone repository
git clone https://github.com/yousabgamal/Task_Management_REST_API.git

# Navigate to project
cd Task_Management_REST_API

# Install dependencies
npm install
```

---

##  Environment Variables

Create a `.env` file:

```
PORT=port_number
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

##  Run the Project

```bash
# Development mode
npm run dev

# Production mode
npm start
```

---

##  API Endpoints

### Auth Routes

```
POST /api/auth/register   -> Register new user
POST /api/auth/login      -> Login user
```

### Task Routes

```
GET    /api/tasks         -> Get all tasks
POST   /api/tasks         -> Create new task
GET    /api/tasks/:id     -> Get single task
PUT    /api/tasks/:id     -> Update task
DELETE /api/tasks/:id     -> Delete task
```

---

##  Security Features

- Password hashing with bcrypt
- JWT authentication
- Protected routes middleware
- Role-based authorization (Admin / User)

---

##  Future Improvements

- Add pagination & filtering
- Add task categories & priorities
- Add WebSocket for real-time updates
- Add unit testing (Jest / Mocha)

---

##  Author

Backend Developer | Node.js Enthusiast  
GitHub: https://github.com/yousabgamal
