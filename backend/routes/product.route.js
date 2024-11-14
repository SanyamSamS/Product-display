import express from 'express';
import mongoose from 'mongoose';
import Product from '../models/Product.js'; // Import the Product model

const router = express.Router();

export default router;

router.post('/', async (req, res) => {
    const product = req.body; // Get the product data from the request body

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ message: 'Please fill all fields' });
    }

    const newProduct = new Product(product); // Create a new product instance

    try {
        await newProduct.save(); // Save the product to the database
        res.status(201).json(newProduct); // Respond with the saved product
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params; // Get the product ID from the request parameters

    try {
        await Product.findByIdAndDelete(id); // Find the product by ID
        res.json({ message: 'Product removed' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

router.get('/', async (req, res) => {
    try {
        const products = await Product.find({}); // Fetch all products from the database
        res.json(products); // Respond with the products
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params; // Get the product ID from the request parameters
    const product = req.body; // Get the product data from the request body

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ message: 'Please fill all fields' });
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true }); // Find the product by ID and update
        res.json(updatedProduct); // Respond with the updated product
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});