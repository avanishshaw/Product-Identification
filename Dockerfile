c# Use Node.js 20 image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy backend package files
COPY backend/package*.json ./

# Install dependencies (npm ci is faster and more reliable for production)
RUN npm ci --only=production

# Copy backend source code
COPY backend/ ./

# Expose port (Render will set PORT dynamically via environment variable)
EXPOSE 5001

# Set NODE_ENV to production
ENV NODE_ENV=production

# Start backend (Render will override PORT via env var)
CMD ["npm", "start"]
