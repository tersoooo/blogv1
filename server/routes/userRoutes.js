const express = require('express');
const { User } = require('../models');
const router = express.Router();
const bcrypt = require('bcrypt');

router.post('/create', async (req, res) => {
   try{
       const { name, email, password, profileImage } = req.body;
       const existingUser = await User.findOne({ where : { email } });
       if(existingUser){
           return res.status(400).json({ message: 'Bu e-posta adresi zaten kayıtlı!' });
       }
       const hashedPassword = await bcrypt.hash(password, 10);

       const user = await User.create({
           name,
           email,
           password: hashedPassword,
           profileImage: profileImage || 'uploads/profiles/default.png',
       });
       res.status(201).json(user);
   }catch (error) {
       res.status(500).json({ error: error.message });
   }
});

module.exports = router;