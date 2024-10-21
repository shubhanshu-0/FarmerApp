// In your routes file (e.g., userRoutes.js)
const express = require('express');
const router = express.Router();
const Farmer = require('../models/farmer');
const Secretary = require('../models/secretary');
const Admin = require('../models/Admin');

router.post('/authenticate', async (req, res) => {
    const { userType, mobileNumber } = req.body;

    try {
        let user;
        switch (userType) {
            case 'farmer':
                user = await Farmer.findOne({ mobileNumber });
                break;
            case 'secretary':
                user = await Secretary.findOne({ mobileNumber });
                break;
            case 'admin':
                user = await Admin.findOne({ mobileNumber });
                break;
            default:
                return res.status(400).json({ message: 'Invalid user type' });
        }

        if (!user) {
            // return res.status(404).json({ message: 'User not found' });
            res.redirect(`/${userType}SignUp`)
        }

        res.status(200).json({ message: 'User authenticated successfully', user });
        res.redirect(`/${userType}Routes` , {user});
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
