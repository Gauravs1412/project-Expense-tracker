const Expense=require('../models/expense')

exports.expense=async(req,res)=>{
    try {
        
    console.log(req.body)
    //console.log(req.headers.authorization)

    const {amount,description,category}=req.body
    console.log("expense user",req.user)
    const User=req.user
    const createExpense=await User.createExpense({
        amount:amount,
        description:description,
        category:category
    })
    console.log(createExpense)
    
    return res.status(201).json({msg:"Expense successfully added",
                                createExpense})

    } catch (error) {
        console.log(error)
        return res.json({msg:"kuch error hai expense.js me"})
    }
}