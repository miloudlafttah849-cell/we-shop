# Stage 1: Build the React/Vite application
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application source code
COPY . .

# Build the React application
# VITE_APP_API_URL is an example. If your frontend needs to know the backend URL at build time,
# you might pass it as a build argument or ensure it's configured in your Vite config.
# For Docker Compose, often the frontend calls the backend via its service name (e.g., http://backend:3000).
RUN npm run build

# ---
# Stage 2: Serve the application with Nginx
FROM nginx:stable-alpine AS production

# Copy custom Nginx configuration
# The build context is 'front/', so we go up one level to find the shared nginx config
COPY ../nginx/default.conf /etc/nginx/conf.d/default.conf

# Remove default Nginx static content
RUN rm -rf /usr/share/nginx/html/*

# Copy the built React application from the build stage to Nginx's web root
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 (Nginx default)
EXPOSE 80

# Command to run Nginx
CMD ["nginx", "-g", "daemon off;"]