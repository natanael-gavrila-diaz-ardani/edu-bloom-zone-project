# Edu Bloom Zone - MERN Stack Education Platform

Platform pembelajaran online yang dibangun dengan MERN stack (MongoDB, Express.js, React, Node.js) dengan dukungan Tailwind CSS, Vite, dan Prisma ORM.

## 🚀 Fitur Utama

- **Frontend Modern**: React dengan Vite untuk performa optimal
- **Styling**: Tailwind CSS untuk desain yang responsif dan modern
- **Routing**: React Router DOM untuk navigasi SPA
- **State Management**: React Query untuk manajemen state server
- **Forms**: React Hook Form untuk handling form yang efisien
- **Backend API**: Express.js dengan middleware keamanan
- **Database**: MongoDB dengan Prisma ORM
- **Authentication**: JWT-based authentication
- **Security**: Helmet, CORS, Rate Limiting

## 🛠️ Tech Stack

### Frontend
- React 18
- Vite
- React Router DOM
- Tailwind CSS
- React Hook Form
- React Query
- Axios
- Lucide React (Icons)
- React Hot Toast

### Backend
- Node.js
- Express.js
- Prisma ORM
- MongoDB
- JWT Authentication
- Bcryptjs
- Express Validator
- Helmet
- CORS
- Express Rate Limit

## 📁 Struktur Project

```
edu-bloom-zone/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom hooks
│   │   ├── services/       # API services
│   │   └── ...
│   ├── public/
│   └── package.json
├── backend/                 # Express.js backend
│   ├── routes/             # API routes
│   ├── middleware/         # Custom middleware
│   ├── config/             # Configuration files
│   ├── prisma/             # Prisma schema
│   └── package.json
└── package.json            # Root package.json
```

## 🚀 Instalasi dan Setup

### Prerequisites
- Node.js (v16 atau lebih baru)
- MongoDB (local atau cloud)
- npm atau yarn

### 1. Clone Repository
```bash
git clone <repository-url>
cd edu-bloom-zone
```

### 2. Install Dependencies
```bash
# Install semua dependencies (root, frontend, dan backend)
npm run install-all
```

### 3. Setup Environment Variables

#### Backend (.env)
```bash
# Copy template environment
cp backend/env.template backend/.env

# Edit backend/.env dengan konfigurasi Anda
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:3000
DATABASE_URL="mongodb://localhost:27017/edu-bloom-zone"
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRE=7d
```

#### Frontend (.env)
```bash
# Copy template environment
cp frontend/env.template frontend/.env

# Edit frontend/.env
VITE_API_URL=http://localhost:5000/api
```

### 4. Setup Database
```bash
# Generate Prisma client
cd backend
npm run db:generate

# Push schema ke database
npm run db:push

# (Opsional) Buka Prisma Studio
npm run db:studio
```

### 5. Jalankan Development Server
```bash
# Dari root directory, jalankan frontend dan backend bersamaan
npm run dev

# Atau jalankan secara terpisah:
# Terminal 1 - Backend
npm run server

# Terminal 2 - Frontend  
npm run client
```

## 📱 Akses Aplikasi

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Health Check**: http://localhost:5000/api/health
- **Prisma Studio**: http://localhost:5555 (jika dijalankan)

## 🔧 Scripts Tersedia

### Root Level
- `npm run dev` - Jalankan frontend dan backend bersamaan
- `npm run server` - Jalankan backend saja
- `npm run client` - Jalankan frontend saja
- `npm run build` - Build frontend untuk production
- `npm run install-all` - Install semua dependencies

### Backend
- `npm run dev` - Jalankan dengan nodemon
- `npm start` - Jalankan production
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema ke database
- `npm run db:migrate` - Jalankan migration
- `npm run db:studio` - Buka Prisma Studio

### Frontend
- `npm run dev` - Development server
- `npm run build` - Build untuk production
- `npm run preview` - Preview build
- `npm run lint` - Lint code

## 🗄️ Database Schema

Project menggunakan Prisma dengan MongoDB. Schema utama meliputi:

- **User**: Informasi pengguna dengan role-based access
- **Course**: Data kursus dengan metadata lengkap
- **Lesson**: Materi pembelajaran per kursus
- **Enrollment**: Relasi user dengan kursus
- **Review**: Rating dan review kursus

## 🔐 Authentication

Sistem menggunakan JWT-based authentication dengan:
- Registration dan Login
- Protected routes
- Role-based access (STUDENT, INSTRUCTOR, ADMIN)
- Password hashing dengan bcrypt

## 🎨 UI/UX Features

- Responsive design dengan Tailwind CSS
- Modern component library
- Loading states dan error handling
- Toast notifications
- Form validation
- Dark/light mode ready

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register` - Register user baru
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Users
- `GET /api/users` - Get all users (Admin)
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user (Admin)

### Courses
- `GET /api/courses` - Get all published courses
- `GET /api/courses/:id` - Get course by ID
- `POST /api/courses` - Create course (Instructor)
- `PUT /api/courses/:id` - Update course (Instructor)
- `DELETE /api/courses/:id` - Delete course (Instructor)

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
cd frontend
npm run build
# Deploy dist/ folder
```

### Backend (Railway/Heroku)
```bash
cd backend
# Setup environment variables
# Deploy dengan start script
```

## 🤝 Contributing

1. Fork repository
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Support

Jika ada pertanyaan atau butuh bantuan, silakan:
- Buat issue di repository
- Hubungi tim development
- Email: support@edubloomzone.com

---

**Happy Learning! 🎓**
