// back/ecosystem.config.js

module.exports = {
  apps: [
    {
      name: 'we-chat',
      script: 'src/index.ts', // <-- Your main Node.js entry file
      instances: 'max', // <-- USE ALL AVAILABLE CPU CORES (recommended)
      exec_mode: 'cluster', // <-- Enables the load balancing cluster mode
      watch: false, // PM2 file watching is usually disabled in Docker
      // Custom graceful shutdown timeout (optional)
      kill_timeout: 5000, // Wait 5 seconds for processes to shut down gracefully
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        // Environment variables can be defined here or injected via Docker Compose
      }
    }
  ]
};