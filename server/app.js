const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const userRoutes = require('./routes/userRoutes');

// Middlewares
app.use(express.json());

// Routes
app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})