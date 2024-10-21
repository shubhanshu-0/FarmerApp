const express = require('express');
const router = express.Router();
const Pump = require('../../models/pump'); 
const Farm = require('../../models/farm');


router.post('/control/:pumpId/status', async (req, res) => {
    const { status } = req.body;
    const { pumpId } = req.params;

    try {
        const pump = await Pump.findByIdAndUpdate(pumpId, { status }, { new: true });
        if (!pump) {
            return res.status(404).json({ message: 'Pump not found' });
        }
        res.status(200).json(pump);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/control/:pumpId/interval', async (req, res) => {
    const { interval } = req.body;
    const { pumpId } = req.params;

    try {
        const pump = await Pump.findByIdAndUpdate(pumpId, { interval }, { new: true });
        if (!pump) {
            return res.status(404).json({ message: 'Pump not found' });
        }
        res.status(200).json(pump);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});
