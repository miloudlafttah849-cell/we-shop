import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './services/database';
import orderRoutes from './routes/orderRoutes';
import productRoutes from './routes/productRoutes';
import healthCheckRouter from './routes/health-check';

dotenv.config();

connectDB();

const app = express();
// Use BACKEND_PORT from .env for consistency with docker-compose.yml
const port = process.env.BACKEND_PORT || 3001;

app.use(cors());
app.use(express.json());

// Mount the health check route - this is what Docker will hit
app.use('/health', healthCheckRouter);

// It's good practice to namespace your API routes
app.use('/api', orderRoutes);
app.use('/api', productRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
