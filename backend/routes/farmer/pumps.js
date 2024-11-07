const express = require('express');
const router = express.Router({ mergeParams: true });
const Pump = require('../../models/pump'); 
const Farm = require('../../models/farm');
const farms = require('../farmer/farms');

// router.use(authMiddleware);

router.get('/' ,  async (req , res) => {
    const farmId = req.params.farmId;
    console.log(farmId);
    try {
        const pumps = await Pump.find({ farmId: farmId});
        res.status(200).json(pumps);
    }catch (error){
        res.status(500).json({ error: 'Internal server error' });
    }
})

router.post('/add' , async (req, res) => {   
    const { pumpId } = req.body
    const farmId = req.params.farmId;
    console.log(farmId);
    try {
        const newPump = await Pump.create({
            pumpId ,
            farmId ,
            status : false , 
        });

        // await newPump.save();
        res.status(201).json({ message: 'Pump added successfully', pump: newPump });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.delete('/:pumpId' , async (req , res) => {
    const farmId = req.params.farmId;
    const { pumpId } = req.params;
    try {
        const pump = await Pump.findOneAndDelete({ _id: pumpId, farmId });
         if (!pump) {
            return res.status(404).json({ message: 'Pump not found' });
        }
        res.status(200).json({ message: 'Pump deleted successfully' });
    }catch (error){
        res.status(500).json({ error: 'Internal server error' });
    }
})


router.post('/:pumpId/status' , async (req, res) => {
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


router.post('/:pumpId/interval' , async (req, res) => {
    const { interval } = req.body;
    const { pumpId } = req.params;

    try {

        const pump = await Pump.findById(pumpId);
        if (!pump) {
            return res.status(404).json({ message: 'Error' });
        }else if(pump.status === true){
            return res.status(404).json({message: 'Turn off the pump first'})
        }else {
            await Pump.findByIdAndUpdate(pumpId, { interval }, { new: true });
            await Pump.findByIdAndUpdate(pumpId, { status : true }, { new: true });
        }
        res.status(200).json(pump);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
