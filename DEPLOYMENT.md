# Deployment Guide for AuthentiQR

This guide will help you deploy the AuthentiQR application to production.

## Prerequisites

- Node.js 18+ installed
- MongoDB Atlas account or MongoDB instance
- Docker (optional, for containerized deployment)

## Environment Variables

### Frontend

Create a `.env` file in the `frontend` directory:

```env
VITE_API_URL=https://your-backend-domain.com/api
```

### Backend

Create a `.env` file in the `backend` directory:

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority
PORT=5001
NODE_ENV=production
CORS_ORIGIN=https://your-frontend-domain.com
```

## Deployment Options

### Option 1: Traditional Deployment

#### Backend Deployment

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install --production
```

3. Set up environment variables in `.env` file

4. Start the server:
```bash
npm start
```

Or use a process manager like PM2:
```bash
npm install -g pm2
pm2 start server.js --name authentiqr-api
pm2 save
```

#### Frontend Deployment

1. Build the frontend:
```bash
cd frontend
npm install
npm run build
```

2. The built files will be in `frontend/dist`. Deploy this directory to:
   - **Vercel**: `vercel --prod`
   - **Netlify**: `netlify deploy --prod`
   - **AWS S3 + CloudFront**: Upload `dist` folder to S3 bucket
   - **Nginx/Apache**: Copy `dist` contents to web server directory

3. Ensure your frontend points to the correct backend API URL

### Option 2: Docker Deployment

#### Using Docker Compose

1. Update environment variables in `docker-compose.yml`

2. Build and run:
```bash
docker-compose up -d --build
```

#### Manual Docker Build

1. Build the Docker image:
```bash
docker build -t authentiqr .
```

2. Run the container:
```bash
docker run -d \
  -p 5001:5001 \
  -p 3000:3000 \
  -e MONGO_URI=your_mongo_uri \
  -e NODE_ENV=production \
  authentiqr
```

### Option 3: Platform-Specific Deployment

#### Vercel (Frontend)

1. Install Vercel CLI: `npm i -g vercel`
2. In the frontend directory: `vercel`
3. Set environment variable `VITE_API_URL` in Vercel dashboard

#### Railway / Render (Backend)

1. Connect your GitHub repository
2. Set build command: `cd backend && npm install`
3. Set start command: `cd backend && npm start`
4. Add environment variables in the platform dashboard

#### Heroku

**Backend:**
```bash
cd backend
heroku create your-app-name
heroku config:set MONGO_URI=your_mongo_uri
heroku config:set NODE_ENV=production
git push heroku main
```

**Frontend:**
Deploy `frontend/dist` using the Heroku static buildpack or deploy separately to Vercel/Netlify.

## CORS Configuration

For production, update CORS settings in `backend/server.js`:

```javascript
const corsOptions = {
  origin: process.env.CORS_ORIGIN?.split(',') || ['https://your-frontend-domain.com'],
  credentials: true,
};
```

## MongoDB Setup

1. Create a MongoDB Atlas cluster (or use your own MongoDB instance)
2. Get your connection string
3. Add it to `.env` as `MONGO_URI`
4. Ensure your database allows connections from your server IP

## Security Checklist

- [ ] Remove hardcoded credentials from `server.js`
- [ ] Use environment variables for all sensitive data
- [ ] Enable HTTPS on both frontend and backend
- [ ] Configure CORS properly for production
- [ ] Set up rate limiting (consider using express-rate-limit)
- [ ] Enable MongoDB authentication
- [ ] Use a secure MongoDB connection string
- [ ] Keep dependencies updated

## Monitoring

Consider adding:
- Health check endpoint: `GET /health`
- Logging service (e.g., Winston, Morgan)
- Error tracking (e.g., Sentry)
- Uptime monitoring (e.g., UptimeRobot)

## Troubleshooting

### Frontend cannot connect to backend
- Check CORS configuration
- Verify `VITE_API_URL` is set correctly
- Ensure backend is running and accessible

### MongoDB connection issues
- Verify connection string format
- Check IP whitelist in MongoDB Atlas
- Ensure username/password are correct

### Build errors
- Clear `node_modules` and reinstall
- Check Node.js version (requires 18+)
- Verify all environment variables are set

## Quick Start Script

For development:
```bash
# Terminal 1 - Backend
cd backend
npm install
npm run dev

# Terminal 2 - Frontend
cd frontend
npm install
npm run dev
```

For production:
```bash
# Backend
cd backend
npm install --production
npm start

# Frontend (build first)
cd frontend
npm install
npm run build
# Then serve the dist folder using a web server
```

