#!/bin/bash

echo "🗄️  Setting up database for Edu Bloom Zone..."

# Check if .env file exists
if [ ! -f "backend/.env" ]; then
    echo "❌ Backend .env file not found. Please run setup.sh first."
    exit 1
fi

echo "🔧 Generating Prisma client..."
cd backend
npx prisma generate

echo "📊 Pushing schema to database..."
npx prisma db push

echo "🎯 Opening Prisma Studio (optional)..."
echo "Prisma Studio will open in your browser at http://localhost:5555"
echo "Press Ctrl+C to stop Prisma Studio when done."
npx prisma studio
