import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js'; // Import the connectDB function from the db.js file

import productRoutes from './routes/product.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON data

app.use('/api/products', productRoutes);

app.listen(PORT, () => {
    connectDB(); // Call the connectDB function when the server starts
    console.log(`Server is running on port ${PORT} http://localhost:${PORT}`);
});

