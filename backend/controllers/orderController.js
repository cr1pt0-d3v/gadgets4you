import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const addOrderItems = asyncHandler(async (req, res) => {
    // destructure our values from frontend
    const { 
        orderItems, 
        shippingAddress, 
        paymentMethod, 
        itemsPrice, 
        taxPrice, 
        shippingPrice, 
        totalPrice 
    } = req.body;
    // check if exists an order and is not empty
    if(orderItems && orderItems.length === 0) {
        res.status(400);
        throw new Error('No order items!');
        return;
    } else {
        // creaze an order to save into our db
        const order = new Order({
        orderItems, 
        user: req.user._id,
        shippingAddress, 
        paymentMethod, 
        itemsPrice, 
        taxPrice, 
        shippingPrice, 
        totalPrice
        });
        // save to db
        const createdOrder = await order.save();
        res.status(201).json(createdOrder);
    }
});

export { addOrderItems };