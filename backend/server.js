const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const farmerRoutes = require('./routes/farmRoutes');
const farmRoutes = require('./routes/farmerRoutes');
const pumpRoutes = require('./routes/pumpRoutes');
const secretaryRoutes = require('./routes/secretaryRoutes'); // Added Secretary Routes
const adminRoutes = require('./routes/admin/adminRoutes'); // Added Admin Routes
const app = express();
require('dotenv').config();

app.use(express.json()); // To parse JSON request bodies

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/farm', farmRoutes);
app.use('/api/farmer');
app.use('/api/pump', pumpRoutes);
app.use('/api/secretary', secretaryRoutes); // Secretary routes
app.use('/api/admin', adminRoutes); // Admin routes

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
