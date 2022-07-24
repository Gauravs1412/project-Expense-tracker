
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
        showExpense(expenseres.data.createExpense);
        

    } catch (err) {
        console.log(err)
    }
}

 function showExpense(data){
   const parentNode = document.getElementById('listOfExpenses');
   const id = `${data.id}`;

   parentNode.innerHTML += `

   <li id=${id}>
     ${data.amount} - ${data.description} - ${data.category}
  </li>

   <button onclick='deleteExpense(event,${data.id})'> Delete </delete>
   
   
   `
    
 

}


window.addEventListener('load', ()=> {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:3000/user/getexpenses', { headers: {"Authorization" : token} }).then(response => {
    console.log(response.data)    
    if(response.status === 200){
            response.data.expenses.forEach(e => {

                showExpense(e);
            })
        } else {
            throw new Error();
        }
    })
    .catch(err => {
        console.log(err);
    })
});


async function deleteExpense(e, expenseid) {

    try {
        
    const token = localStorage.getItem('token');
    const response= await axios.delete(`http://localhost:3000/user/deleteexpense/${expenseid}`, { headers: {"Authorization" : token} })
    if(response.status === 204){
        removeExpensefromUI(expenseid);
    } else {
        throw new Error('Failed to delete');
    }
} catch (err) {
        showError(err);  
    }
}

function showError(err){
    document.body.innerHTML += `<div style="color:red;"> ${err}</div>`
}

function removeExpensefromUI(expenseid){
    const expenseElemId = `${expenseid}`;
    document.getElementById(expenseElemId).remove();
}


