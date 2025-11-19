import { Request, Response } from 'express';
import Order from '../models/order';

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { products, total } = req.body;
    const newOrder = new Order({ products, total });
    await newOrder.save();
    res.json(newOrder);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getOrders = async (req: Request, res: Response) => {
  try {
    const allOrders = await Order.find();
    res.json(allOrders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getOrderById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const order = await Order.findById(id);
    res.json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateOrder = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { products, total } = req.body;
    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { products, total },
      { new: true }
    );
    res.json(updatedOrder);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteOrder = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Order.findByIdAndDelete(id);
    res.json({ message: 'Order deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
