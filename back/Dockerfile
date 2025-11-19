# Stage 1: Build the application
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
# to leverage Docker cache for dependencies
COPY package*.json ./

# Install production dependencies
RUN npm ci --omit=dev

# Copy the rest of the application source code
COPY . .

# If you have a build step for your backend (e.g., TypeScript compilation),
# uncomment and adjust the following line:
# RUN npm run build

# ---
# Stage 2: Create the production image
FROM node:20-alpine AS production

# Create a non-root user and group
RUN addgroup --system appgroup && adduser --system --ingroup appgroup appuser

# Set working directory
WORKDIR /app

# Copy only necessary files from the build stage
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package*.json ./
COPY --from=build /app/ecosystem.config.js ./
COPY --from=build /app/src ./src # Adjust 'src' to your actual source directory
# If you had a build step in the previous stage, copy the build output instead:
# COPY --from=build /app/dist ./dist

# Switch to the non-root user
USER appuser

# Command to run the application using PM2
CMD ["pm2-runtime", "ecosystem.config.js"]