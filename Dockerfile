# Multi-stage build for production deployment

# Stage 1: Build Frontend
FROM node:20-alpine AS frontend-builder

WORKDIR /app/frontend

COPY frontend/package*.json ./
RUN npm ci

COPY frontend/ ./
RUN npm run build

# Stage 2: Build Backend
FROM node:20-alpine AS backend-builder

WORKDIR /app/backend

COPY backend/package*.json ./
RUN npm ci --only=production

# Stage 3: Production Image
FROM node:20-alpine

WORKDIR /app

# Copy backend files
COPY --from=backend-builder /app/backend/node_modules ./backend/node_modules
COPY backend/ ./backend/

# Copy frontend build
COPY --from=frontend-builder /app/frontend/dist ./frontend/dist

# Install serve to serve frontend in production
RUN npm install -g serve

WORKDIR /app/backend

# Expose backend port
EXPOSE 5001

# Environment variables
ENV NODE_ENV=production
ENV PORT=5001

# Start script that runs both backend and serves frontend
CMD ["sh", "-c", "node server.js & serve -s ../frontend/dist -l 3000 & wait"]

