 TaskDuty - Personal Task Manager

# Overview

TaskDuty is a full-stack MERN application for managing personal tasks. Users can create, view, update, and delete tasks. Tasks include a title, description, category, due date, and completion status.

# Features

Create tasks
View all tasks
Edit tasks
Delete tasks
Filter tasks by category
Filter tasks by completion status
MongoDB database integration
Responsive user interface

# Technologies Used

# Frontend

React
React Router
Axios
Tailwind CSS

# Backend

Node.js
Express.js
MongoDB Atlas
Mongoose

# Setup Instructions

# Backend

```bash
cd TaskDuty-server
npm install
npm run dev
```

Create a `.env` file and add:

```env
PORT=5000
MONGO_URL=mongodb://jibexdbest356_db_user:<db_password>@ac-tcwh760-shard-00-00.gp52bxs.mongodb.net:27017,ac-tcwh760-shard-00-01.gp52bxs.mongodb.net:27017,ac-tcwh760-shard-00-02.gp52bxs.mongodb.net:27017/?ssl=true&replicaSet=atlas-xqz4t6-shard-0&authSource=admin&appName=Cluster26
```

# Frontend

```bash
cd TaskDuty-Page
npm install
npm run dev
```

## Deployment

Frontend: Vercel

Backend: Render

## Known Issues

No known issues yet!
