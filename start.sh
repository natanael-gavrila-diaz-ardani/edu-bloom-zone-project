#!/bin/bash

echo "🚀 Starting Edu Bloom Zone..."

# Check if .env files exist
if [ ! -f "backend/.env" ]; then
    echo "❌ Backend .env file not found. Please run setup.sh first."
    exit 1
fi

if [ ! -f "frontend/.env" ]; then
    echo "❌ Frontend .env file not found. Please run setup.sh first."
    exit 1
fi

echo "🔧 Starting development servers..."

# Start both frontend and backend
npm run dev
