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


exports.getexpenses = async (req, res)=> {
    try {
        //magic function 
        const expenses=await req.user.getExpenses()
        //console.log(expenses)
        return res.status(200).json({expenses, success: true})
        
    } catch (err) {
        
     return res.status(402).json({ error: err, success: false})
    }
    
       
    }

    exports.deleteexpense = async (req, res) => {

        try {
            const expenseid = req.params.expenseid;
            Expense.destroy({where: { id: expenseid }})
            return res.status(204).json({ success: true, message: "Deleted Successfuly"})
        } catch (err) {
            
            console.log(err);
            return res.status(403).json({ success: true, message: "Failed"})
        }
     
    }