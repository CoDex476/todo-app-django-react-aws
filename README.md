# 📝 Full-Stack Todo App (Django REST + React + Vite + AWS)

A full-stack **Todo application** built with **Django REST Framework** (backend) and **React + Vite** (frontend).  
The backend is powered by **MySQL** and served via **AWS EC2**, while the frontend is hosted on **S3 + CloudFront** with DNS managed by **Route 53**.  
This project demonstrates scalable full-stack development and deployment on the cloud.

---

## 🚀 Features
- Full CRUD operations for todos (Create, Read, Update, Delete)
- REST API built with Django REST Framework
- React + Vite frontend with hot reloading (HMR)
- Persistent MySQL database
- Static file management with Whitenoise
- Secure communication between frontend and backend (CORS-enabled)
- AWS deployment with:
  - **EC2** (backend server)
  - **S3 + CloudFront** (frontend hosting + CDN)
  - **Route 53** (custom domain)

---

## 🛠️ Tech Stack
**Frontend:** React (Vite, ESLint, HMR), JavaScript, HTML, CSS  
**Backend:** Django, Django REST Framework, Python  
**Database:** MySQL  
**Cloud & Deployment:** AWS EC2, S3, CloudFront, Route 53  
**Tools:** Git, GitHub, npm/yarn, pip/venv, dotenv, Whitenoise  

---

---

## 🚀 Deployment on AWS
This project is deployed in a **real-world production environment** with:  

- **AWS EC2** → Hosts the Django backend and React build  
- **AWS S3 + CloudFront** → Storage + CDN distribution for static assets  
- **AWS Route 53** → Custom domain (`task-api.codex.com`, `tasklist.codex.com`)  
- **Gunicorn** → WSGI server for Django  
- **Nginx** → Reverse proxy for load balancing, static/media handling  
- **Certbot (Let’s Encrypt)** → Automatic SSL certificate setup (HTTPS)  
- **Systemd** → Manages Gunicorn service and keeps it alive after reboots  

📂 Deployment configurations (Nginx, Gunicorn, Certbot, Systemd) are included in the [`hostcode/`](./hostcode) folder.  

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/CoDex476/todo-app-django-react-aws.git
cd todo-app-django-react-aws
....
