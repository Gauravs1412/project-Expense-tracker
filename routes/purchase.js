const express = require('express');
// const { Model } = require('sequelize/types');
const authController = require('../controllers/auth');

const purchaseController = require('../controllers/purchase')

const router = express.Router()

router.get('/premiummembership',authController.authenticate,purchaseController.purchasepremium)
router.post('/updatetransactionstatus',authController.authenticate,purchaseController.updateTransactionStatus)



module.exports =router;