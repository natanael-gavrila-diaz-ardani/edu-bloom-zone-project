# Docker Setup untuk Edu Bloom Zone

## 🐳 Overview

Setup Docker untuk menjalankan aplikasi MERN stack Edu Bloom Zone secara lokal dengan MongoDB Express untuk manajemen database.

## 📋 Services

- **Frontend**: React app di port 3000
- **Backend**: Node.js API di port 5000  
- **MongoDB**: Database di port 27017
- **MongoDB Express**: Web interface di port 8081

## 🚀 Quick Start

### 1. Jalankan semua services
```bash
./docker-start.sh
```

### 2. Atau manual dengan Docker Compose
```bash
docker-compose up --build -d
```

## 🔗 Service URLs

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **MongoDB Express**: http://localhost:8081

## 🔐 Login Credentials

### MongoDB Express
- **Username**: admin
- **Password**: admin123

### MongoDB Database
- **Username**: admin
- **Password**: password123
- **Database**: edu_bloom_zone

## 🛠️ Commands

### Start services
```bash
./docker-start.sh
# atau
docker-compose up -d
```

### Stop services
```bash
./docker-stop.sh
# atau
docker-compose down
```

### View logs
```bash
# Semua services
docker-compose logs -f

# Service tertentu
docker-compose logs -f backend
docker-compose logs -f frontend
docker-compose logs -f mongodb
docker-compose logs -f mongo-express
```

### Rebuild services
```bash
docker-compose up --build -d
```

### Remove everything (termasuk data)
```bash
docker-compose down -v --rmi all
```

## 📁 File Structure

```
├── docker-compose.yml          # Main compose file
├── docker.env                  # Environment variables
├── docker-start.sh            # Start script
├── docker-stop.sh             # Stop script
├── mongo-init/
│   └── init-db.js             # MongoDB initialization
├── backend/
│   ├── Dockerfile             # Backend container
│   └── .dockerignore          # Backend ignore file
└── frontend/
    ├── Dockerfile             # Frontend container
    └── .dockerignore          # Frontend ignore file
```

## 🔧 Environment Variables

Semua environment variables sudah dikonfigurasi di `docker-compose.yml` dan `docker.env`:

- `MONGODB_URI`: Connection string ke MongoDB
- `JWT_SECRET`: Secret untuk JWT authentication
- `VITE_API_URL`: URL backend untuk frontend

## 🐛 Troubleshooting

### Port sudah digunakan
```bash
# Cek port yang digunakan
sudo netstat -tulpn | grep :3000
sudo netstat -tulpn | grep :5000
sudo netstat -tulpn | grep :8081

# Stop service yang menggunakan port
sudo kill -9 <PID>
```

### Container tidak start
```bash
# Cek status containers
docker-compose ps

# Cek logs untuk error
docker-compose logs <service-name>
```

### Database connection error
```bash
# Restart MongoDB
docker-compose restart mongodb

# Cek MongoDB logs
docker-compose logs mongodb
```

## 📊 Monitoring

### Cek resource usage
```bash
docker stats
```

### Cek container status
```bash
docker-compose ps
```

### Access container shell
```bash
# Backend
docker-compose exec backend sh

# Frontend  
docker-compose exec frontend sh

# MongoDB
docker-compose exec mongodb mongosh
```

## 🔄 Development

Untuk development dengan hot reload, gunakan volume mounting yang sudah dikonfigurasi di `docker-compose.yml`. Perubahan kode akan langsung ter-reflect tanpa rebuild container.
