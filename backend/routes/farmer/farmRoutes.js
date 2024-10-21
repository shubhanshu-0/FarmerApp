const express = require('express');
const router = express.Router();
const Farm = require('../../models/farm'); 
const authMiddleware = require('../../middleware/authMiddleware'); 

router.use(authMiddleware);

router.get('/', async (req, res) => {
    try {
        const farms = await Farm.find({ farmerId: req.user._id }).populate('farmerId');
        res.status(200).json(farms); // display in frontend
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/add', async (req, res) => {   
    const { name, location, address } = req.body;

    try {
        const newFarm = new Farm({
            name,
            location,
            address,
            farmerId: req.user._id,
        });

        await newFarm.save();
        res.status(201).json(newFarm);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
