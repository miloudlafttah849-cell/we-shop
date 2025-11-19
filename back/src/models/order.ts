import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  products: { type: mongoose.Schema.Types.Mixed, required: true },
  total: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
