import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js'; // Import the connectDB function from the db.js file

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/products', (req, res) => {
});

app.listen(PORT, () => {
    connectDB(); // Call the connectDB function when the server starts
    console.log(`Server is running on port ${PORT} http://localhost:${PORT}`);
});

