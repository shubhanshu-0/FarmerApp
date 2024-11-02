const express = require('express');
const router = express.Router();
const Farms = require('../../models/farm');
const Secretary = require('../../models/secretary');

router.get('/farmers', async (req, res) => {
    try {
        const farmers = await Farmer.find();
        res.status(200).json(farmers);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/secretaries/:id/farms', async (req, res) => {
    const secretaryId = req.params.id;

    try {
        // Find the secretary to get their area control information
        const secretary = await Secretary.findById(secretaryId);
        
        if (!secretary) {
            return res.status(404).json({ message: 'Secretary not found' });
        }

        const areaPinCode = secretary.areaInControl.pinCode; 

        const farms = await Farmer.find({ 'pincode': areaPinCode });

        if (farmers.length === 0) {
            return res.status(404).json({ message: 'No farmers found for this secretary\'s area' });
        }

        res.status(200).json(farmers);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});
module.exports = router;
