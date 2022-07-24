
async function expense(event){
    try {
        
        event.preventDefault();
        const amount=event.target.amount.value;
        const description=event.target.des.value;
        const category=event.target.category.value;

        const obj={
            amount:amount,
            description:description,
            category:category,
        }
        const token=localStorage.getItem("token")
        const expenseres=await axios.post("http://localhost:3000/user/expense",obj,{headers:{"Authorization":token}})
        console.log(expenseres)

    } catch (err) {
        console.log(err)
    }
}