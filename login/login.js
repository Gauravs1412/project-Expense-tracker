function login(event){
    event.preventDefault();
    console.log(event)
    const email = event.target.email.value;
    const password = event.target.psw.value;

    myobj = {
      email,
    password
    }

    //console.log(name)

    axios.post('http://localhost:3000/user/login', myobj)
      .then(res => {
        console.log(res);
        localStorage.setItem('token',res.data.token);
        // localStorage.setItem('userDetails',json.stringify(res.data.user));
        window.location.href = '../Expense/index.html'
        //alert('succesfully signed up')

      })
      .catch(err => {
        console.log(err);
        //alert('user already exists,please login')
      })

     
}