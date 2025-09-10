#!/bin/bash

# Docker Start Script untuk Edu Bloom Zone

echo "🚀 Starting Edu Bloom Zone with Docker Compose..."

# Build dan start semua services
docker-compose up --build -d

echo "✅ Services started successfully!"
echo ""
echo "📋 Service URLs:"
echo "   Frontend:     http://localhost:3000"
echo "   Backend API:  http://localhost:5000"
echo "   MongoDB:      mongodb://localhost:27017"
echo "   Mongo Express: http://localhost:8081"
echo ""
echo "🔐 MongoDB Express Login:"
echo "   Username: admin"
echo "   Password: admin123"
echo ""
echo "📊 To view logs: docker-compose logs -f"
echo "🛑 To stop: docker-compose down"
