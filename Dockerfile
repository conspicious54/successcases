FROM node:20-slim

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Expose the port that Cloud Run will use
ENV PORT=8080
EXPOSE 8080

# Start the server
CMD ["node", "server.js"]