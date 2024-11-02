const express = require('express');
const router = express.Router();

const home = require('./home');
const farmRoutes = require('./farms');
const pumpRoutes = require('./pumps');

router.use('/home', home);         
router.use('/farms', farmRoutes);     
// router.use('/pump', pumpRoutes);        
// router.use('/pumpcontrol', controlPumpRoutes); 

module.exports = router;
