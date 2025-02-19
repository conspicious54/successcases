FROM node:20-slim

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the rest of the application
COPY . .

# Build the application
RUN npm install && npm run build

# Cleanup dev dependencies
RUN npm prune --production

# Expose the port that Cloud Run will use
ENV PORT=8080
EXPOSE 8080

# Start the server
CMD ["node", "server.js"]