#!/bin/bash

echo "🚀 Setting up Edu Bloom Zone MERN Stack Project..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if MongoDB is running (optional)
if ! command -v mongod &> /dev/null; then
    echo "⚠️  MongoDB is not installed. Please install MongoDB or use MongoDB Atlas."
fi

echo "📦 Installing dependencies..."

# Install root dependencies
npm install

# Install backend dependencies
cd backend
npm install
cd ..

# Install frontend dependencies
cd frontend
npm install
cd ..

echo "🔧 Setting up environment files..."

# Copy environment templates
cp backend/env.template backend/.env
cp frontend/env.template frontend/.env

echo "🗄️  Setting up database..."

# Generate Prisma client
cd backend
npx prisma generate
cd ..

echo "✅ Setup completed successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Edit backend/.env with your MongoDB connection string"
echo "2. Edit frontend/.env with your API URL (if different)"
echo "3. Run 'npm run db:push' to push schema to database"
echo "4. Run 'npm run dev' to start development servers"
echo ""
echo "🌐 Access your application:"
echo "- Frontend: http://localhost:3000"
echo "- Backend API: http://localhost:5000"
echo "- API Health: http://localhost:5000/api/health"
echo ""
echo "Happy coding! 🎉"
