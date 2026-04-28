# 🚀 DevOps Project - Auto Deploy Web App

## 📌 Overview

This project demonstrates a simple **DevOps pipeline** using:

* Node.js web application
* Docker containerization
* Git for version control
* AWS EC2 for deployment
* Bash scripting for automation

The goal is to show a complete flow from **code → build → deploy**.

---

## 🏗️ Architecture

User → Browser → AWS EC2 → Docker Container → Node.js App

---

## 🛠️ Technologies Used

* Node.js
* Express
* Docker
* Git
* Amazon Web Services
* Bash scripting

---

## 📁 Project Structure

```
04_devops_proj/
 ├── app.js
 ├── index.html
 ├── Dockerfile
 ├── deploy.sh
 ├── package.json
 └── README.md
```

---

## ⚙️ How to Run Locally

### 1. Clone the repository

```
git clone <your-repo-url>
cd 04_devops_proj
```

### 2. Install dependencies

```
npm install
```

### 3. Run the app

```
node app.js
```

Open:

```
http://localhost:3000
```

---

## 🐳 Run with Docker

### Build image

```
docker build -t myapp .
```

### Run container

```
docker run -d -p 3000:3000 myapp
```

---

## ☁️ Deployment on AWS

1. Launch EC2 instance
2. Install Docker & Git
3. Clone repository
4. Run deployment script

---

## ⚡ Deployment Script

Run:

```
./scripts/deploy.sh
```

This script will:

* Pull latest code from Git
* Build Docker image
* Stop old container
* Run new container

---

## 🌐 Access the Application

```
http://<EC2-PUBLIC-IP>
```

---

## 🔍 Health Check Endpoint

```
/health
```

Returns:

```
{
  "status": "UP"
}
```

---

## 🚀 Future Improvements

* CI/CD with GitHub Actions
* Push images to AWS ECR
* Use ECS instead of EC2
* Add database
* Add monitoring & logging

---

## 👨‍💻 Author

Muhammed_Reda

---

## ⭐ Notes

This project is built for learning DevOps concepts and demonstrating real-world workflow.
