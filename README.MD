# E-Commerce Platform Setup Guide

This guide details how to set up and run the multi-service E-commerce application using Docker Compose for both development and production stages.

## Table of Contents

1.  Architecture Overview
2.  Prerequisites
3.  Development Stage (Local Hot-Reload)
4.  Production Stage (Fully Containerized)

## 1\. Architecture Overview

This application is composed of four services managed by Docker Compose:

| Service | Technology | Role | Port |
| :--- | :--- | :--- | :--- |
| **`mongo`** | MongoDB | Database | `27017` |
| **`backend`** | Node.js / Express | API Server | `${BACKEND_PORT}` (default: `3000`) |
| **`frontend`** | React / Vite | Public Client | `${FRONTEND_PORT}` (default: `80`) |
| **`admin`** | React / CRA | Admin Panel | `${ADMIN_PORT}` (default: `8080`) |

## 2\. Prerequisites

  * **Docker**
  * **Docker Compose** (usually included with modern Docker installations)
  * Git

## 3\. Development Stage (Local Hot-Reload)

The development setup is designed for fast iteration and hot-reloading (where possible) using Node and React CLI tools directly, while still utilizing the **containerized MongoDB** for a consistent environment.

### 3.1. Start the Database

We will only run the `mongo` container using Docker Compose and run the front-end and back-end processes on the host machine.

1.  **Start the MongoDB Database:**

    ```bash
    docker compose up -d mongo
    ```

    > **Note:** The MongoDB service is now accessible on the network address **`mongodb://localhost:27017`** from your host machine.

### 3.2. Run the Backend (`back/`)

The backend runs on the host to support live file watching and easy debugging.

1.  Navigate to the backend directory:
    ```bash
    cd back/
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Create a local `.env` file for development:
    ```bash
    # Example content for back/.env
    MONGO_URI=mongodb://localhost:27017/we-shop-dev
    BACKEND_PORT=3000
    ```
4.  Run the application with a tool that supports file watching (e.g., `nodemon`):
    ```bash
    npm run dev  # Assuming your package.json has a 'dev' script for nodemon
    ```

### 3.3. Running the Frontend (`front/`)

The frontend runs on the host for Vite's fast HMR (Hot Module Replacement).

1.  Navigate to the frontend directory:
    ```bash
    cd front/
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the Vite development server:
    ```bash
    npm run dev
    ```

### 3.4. Running the Admin Panel (`admin/`)

The admin panel also runs on the host.

1.  Navigate to the admin directory:
    ```bash
    cd admin/
    ```
2.  Install dependencies and start the CRA development server:
    ```bash
    npm install
    npm start
    ```

## 4\. Production Stage (Fully Containerized)

The production stage uses **Docker Compose** to build and orchestrate all services using the defined **multi-stage Dockerfiles** and the **PM2-runtime** process manager for high performance and stability.

### 4.1. Configuration

All configuration is managed by the `.env` file in the project root. Before building, ensure the ports and other variables are set to your desired production values.

### 4.2. Build and Run All Services

Execute this command from the project root directory. This command will:

1.  Build the custom images (`backend`, `frontend`, `admin`) using the `production` target stage.
2.  Start all services, ensuring they follow the correct startup order (**Mongo → Backend → Clients**).

```bash
docker compose up --build -d
```

### 4.2. Key Production Instructions

| Instruction | Detail |
| :--- | :--- |
| **Initial Deployment Check** | After running, use `docker compose ps` to check the status. Ensure `backend` shows **`(healthy)`**. If it shows **`(starting)`**, check the backend logs for MongoDB connection errors: `docker compose logs backend`. |
| **Accessing Services** | **Frontend (Public):** `http://localhost:80` (or your server IP) |
| | **Admin Panel:** `http://localhost:8080` (or your server IP) |
| | **API Backend:** `http://localhost:3000` |
| **Environment Variables** | **Crucial:** Ensure all sensitive environment variables (e.g., API Keys, Secret JWTs, Database Credentials) are correctly set in the `docker-compose.yml` file or securely injected using a dedicated `.env` file loaded by Docker Compose. |
| **Scaling the API** | To utilize more CPU cores, the PM2 cluster is already enabled. To scale horizontally (e.g., on a Swarm/Kubernetes), simply replicate the `backend` service. |
| **Stopping Services** | To stop and remove the containers (but **preserve the MongoDB data volume**): `docker compose down` |
| **Removing Data** | To stop services and **delete the persistent MongoDB data volume**: `docker compose down -v` |