const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})