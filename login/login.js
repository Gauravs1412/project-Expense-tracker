function login(event){
    event.preventDefault();
    console.log(event)
    const email = event.target.email.value;
    const password = event.target.psw.value;

    const myobj = {
      email,
    password
    }

    //console.log(name)

    axios.post('http://localhost:3000/user/login', myobj)
      .then(res => {
        console.log(res);

        if(res.status === 200){

          const {token} = res.data
          localStorage.setItem("token",token);
          // localStorage.setItem('userDetails',json.stringify(res.data.user));
          window.location.href = '../Expense/index.html'
          //alert('succesfully signed up')
  

        }else {
           alert('please enter correct password')
          
        }
       
      })
      .catch(err => {
        console.log(err);

        
      })

     
}