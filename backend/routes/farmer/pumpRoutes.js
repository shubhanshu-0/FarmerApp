const express = require('express');
const router = express.Router();
const Pump = require('../../models/pump'); 
const Farm = require('../../models/farm');
const authMiddleware = require('../../middleware/authMiddleware'); // for middleware

//  protect routes
router.use(authMiddleware);

router.get('/', async (req, res) => {
    try {
        const farms = await Farm.find({ farmerId: req.user._id }).populate('farmerId');
        res.status(200).json(farms); // display in frontend
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/:farmId/pumps' , async (req , res) => {
    const farmId = req.params.farmId;

    try {
        const pumps = await Pump.find({ farmId: farmId});
        res.status(200).json(pumps);
    }catch (error){
        res.status(500).json({ error: 'Internal server error' });
    }
})


router.get('/:farmId/deletePump/:pumpId' , async (req , res) => {
    const farmId = req.params.farmId;

    try {
        const pumps = await Pump.find({ farmId: farmId});
        res.status(200).json(pumps);
    }catch (error){
        res.status(500).json({ error: 'Internal server error' });
    }
})

router.post('/:farmId/addPump', async (req, res) => {   
    
    // first scan for any IOT Device then fill the required fields
    const farmId = req.params.farmId;
    // const pumpId = await 
    // MAX 3 PUMPS IN A FARM

    try {
        const newPump = new Pump({
            pumpId ,
            farmId ,
            status : false , 
            farmerId: req.user._id, // Link to the farmer
        });

        await newPump.save();
        res.status(201).json({ message: 'Pump added successfully', pump: newPump });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});


module.exports = router;
