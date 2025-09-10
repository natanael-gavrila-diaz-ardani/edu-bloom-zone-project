#!/bin/bash

# Docker Stop Script untuk Edu Bloom Zone

echo "🛑 Stopping Edu Bloom Zone services..."

# Stop dan remove containers
docker-compose down

echo "✅ All services stopped successfully!"
echo ""
echo "💡 To remove volumes (database data): docker-compose down -v"
echo "💡 To remove images: docker-compose down --rmi all"
