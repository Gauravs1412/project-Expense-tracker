const token = localStorage.getItem('token');
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


document.getElementById('rzp-button1').onclick = async function (e) {
    const response  = await axios.get('http://localhost:3000/purchase/premiummembership', { headers: {"Authorization" : token} });
    console.log(response);
    var options =
    {
     "key": response.data.key_id, // Enter the Key ID generated from the Dashboard
     "name": "Gaurav and ankit",
     "order_id": response.data.order.id, // For one time payment
     "prefill": {
       "name": "Test User",
       "email": "test.user@example.com",
       "contact": "7003442036"
     },
     "theme": {
      "color": "#3399cc"
     },
     // This handler function will handle the success payment
     "handler": function (response) {
         console.log(response);
         axios.post('http://localhost:3000/purchase/updatetransactionstatus',{
             order_id: options.order_id,
             payment_id: response.razorpay_payment_id,
         }, { headers: {"Authorization" : token} }).then(() => {
             alert('You are a Premium User Now')
         }).catch(() => {
             alert('Something went wrong. Try Again!!!')
         })
     },
  };
  const rzp1 = new Razorpay(options);
  rzp1.open();
  e.preventDefault();

  rzp1.on('payment.failed', function (response){
  alert(response.error.code);
  alert(response.error.description);
  alert(response.error.source);
  alert(response.error.step);
  alert(response.error.reason);
  alert(response.error.metadata.order_id);
  alert(response.error.metadata.payment_id);
 });
}




