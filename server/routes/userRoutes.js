const express = require('express');
const { User } = require('../models');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/profiles')
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname); // Benzersiz dosya adı
    },
})

const upload = multer({ storage });


router.post('/create', upload.single('profileImage'), async (req, res) => {
   try{
       const { name, email, password } = req.body;
       const profileImage = req.file ? req.file.path : null;

       console.log("Profil Resmi Yolu:", profileImage);


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
       console.error("Hata Detayı:", error.message);
       res.status(500).json({ error: error.message });
   }
});

router.post('/login', async (req, res) =>
{
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ message: 'E-posta adresi bulunamadı!' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Geçersiz şifre!' });
        }

        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({
            message: 'Giriş başarılı!',
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                profileImage: user.profileImage,
            },
        });
    } catch (error) {
        console.error("Backend Hatası:", error.message);
        res.status(500).json({ error: error.message });
    }
});
module.exports = router;