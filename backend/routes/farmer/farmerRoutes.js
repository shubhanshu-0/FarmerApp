const express = require('express');
const router = express.Router();

const farmRoutes = require('./farmRoutes');
const pumpRoutes = require('./pumpRoutes');

// Use the routes for farmer operations
router.use('/farms', farmRoutes);  // Access farms at /farmers/farms
router.use('/pumps', pumpRoutes);  // Access pumps at /farmers/pumps

module.exports = router;
