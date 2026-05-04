# Base image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install 

# Copy project files
COPY . .

# Build the app
# RUN pnpm run build

# Expose port
EXPOSE 3000

# Run Next.js
CMD ["pnpm", "start"]
