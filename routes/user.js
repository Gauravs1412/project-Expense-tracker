const express = require('express');

const userController = require('../controllers/user')


const router = express.Router();


router.post('/signup',userController.signup);

router.post('/login',userController.login)

// router.post('/login',)




module.exports = router;