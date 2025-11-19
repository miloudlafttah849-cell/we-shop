import { Router, Request, Response } from 'express';
import mongoose from 'mongoose';

const router = Router();

/**
 * @route   GET /health
 * @desc    Checks the health of the application and its database connection.
 *          Returns a 200 status if the database is connected, otherwise 503.
 * @access  Public
 */
router.get('/', async (req: Request, res: Response) => {
  try {
    // Mongoose readyState values:
    // 0: disconnected
    // 1: connected
    // 2: connecting
    // 3: disconnecting
    const isConnected = mongoose.connection.readyState === 1;

    if (isConnected) {
      return res.status(200).json({ status: 'UP', db: 'connected' });
    }

    // If not connected, return a 503 Service Unavailable error
    return res.status(503).json({ status: 'DOWN', db: 'disconnected' });
  } catch (error: any) {
    return res.status(503).json({ status: 'DOWN', db: 'error', error: error.message });
  }
});

export default router;