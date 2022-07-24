const express = require('express');

const userController = require('../controllers/user')

const authController = require('../controllers/auth');
const expenseController = require('../controllers/expense');


const router = express.Router();


router.post('/signup',userController.signup);

router.post('/login',userController.login)

router.post('/expense',authController.authenticate,expenseController.expense);

router.get('/getexpenses',authController.authenticate,expenseController.getexpenses)

router.delete('/deleteexpense/:expenseid',authController.authenticate,expenseController.deleteexpense)



// router.post('/login',)




module.exports = router;