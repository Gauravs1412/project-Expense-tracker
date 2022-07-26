const Razorpay = require('razorpay');

const Order = require('../models/order')

exports.purchasepremium = async(req,res) =>{
    try {

        var rzp = new Razorpay({
            key_id:"rzp_test_pP2GL6QzKEsHak",
            key_secret:"tl47OmGWJUZsnGvIiWVVdg4h"
        })

        const amount = 2500

        const order = await rzp.orders.create({amount,currency:"INR"})//generates order id
        const create = await req.user.createOrder({orderid:order.id,status:'pending'})
        return res.status(201).json({order,key_id:rzp.key_id})

    } catch (err){
        console.log(err)
        return res.status(403).json({message:'something went wrong'})
    }
}


exports.updateTransactionStatus = async(req,res) => {
    try {
        const {payment_id,order_id} = req.body;
        const order = await Order.findOne({where:{orderid:order_id}})
         await order.update({paymentid:payment_id,status:'successful'});
         await req.user.update({ispremiumuser:true})
         return res.status(201).json({success:true,message:'Transaction succesfull'});



    }catch(err) {
           console.log(err)
    }
}