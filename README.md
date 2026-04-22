# HelloDevOps 🚀

A simple full-stack application built to learn **production-style deployment** using:

* React (Frontend)
* Node.js + Express (Backend)
* MySQL (Database)
* Docker & Docker Compose
* Nginx (Reverse Proxy)

---

## 📌 Project Goal

This project is intentionally simple (hello world level) but focuses on:

* Containerization
* Multi-service architecture
* Internal networking
* Reverse proxy setup
* Production-like environment locally

---

## 🏗️ Architecture

```
Browser
   ↓
localhost:8080
   ↓
Nginx (Frontend Container)
   ├── / → React App
   └── /api → Backend Container
                   ↓
                MySQL Container
```

---

## 📁 Folder Structure

```
hello-devops/
  ├── client/              # React frontend
  │   ├── Dockerfile
  │   ├── nginx.conf
  │   └── src/
  │
  ├── server/              # Node.js backend
  │   ├── Dockerfile
  │   ├── index.js
  │   └── .env
  │
  ├── docker-compose.yml   # Multi-container setup
  ├── .env                 # MySQL config (root)
  └── README.md
```

---

## ⚙️ Tech Stack

* React (Vite)
* Node.js (Express)
* MySQL 8
* Docker
* Docker Compose
* Nginx

---

## 🚀 How to Run Locally

### 1. Clone repo

```bash
git clone https://github.com/AnishDora/HelloDevOps.git
cd HelloDevOps
```

---

### 2. Create environment files

#### Root `.env`

```env
MYSQL_ROOT_PASSWORD=rootpass
MYSQL_DATABASE=helloDev
```

#### `server/.env`

```env
DB_HOST=db
DB_USER=root
DB_PASS=
DB_NAME=helloDev
PORT=3000
```

---

### 3. Run the app

```bash
docker compose up --build
```

---

### 4. Open in browser

```
http://localhost:8080
```

---

## 🧱 Database Setup (First Time Only)

Enter MySQL container:

```bash
docker compose exec db mysql -u root -p
```

Then run:

```sql
USE helloDev;

CREATE TABLE messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  text VARCHAR(255)
);
```

---

## 🔄 API Endpoints

| Method | Endpoint      | Description        |
| ------ | ------------- | ------------------ |
| GET    | /api/messages | Fetch all messages |
| POST   | /api/messages | Insert new message |

---

## 🔥 Key Concepts Learned

* Dockerizing frontend and backend separately
* Multi-stage builds (React + Nginx)
* Docker Compose orchestration
* Internal container networking (`backend:3000`)
* Reverse proxy using Nginx
* Environment variable management
* Separation of dev vs production configs

---

## ⚠️ Notes

* Database is ephemeral (data resets on container removal)
* Table must be created manually (for now)
* Backend may need restart if DB starts slowly

---

## 📈 Next Steps

* Add DB initialization scripts
* Add health checks
* Push images to Docker Hub
* Deploy to AWS EC2
* Add CI/CD (GitHub Actions)
* Add staging & production environments
* Move DB to AWS RDS

---

## 👨‍💻 Author

Anish Dora

---

## ⭐ Purpose

This project is for learning **DevOps + production deployment concepts**, not for building a complex application.

---
