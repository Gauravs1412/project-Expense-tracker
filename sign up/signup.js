const { response } = require("express");

function signup(event){
    event.preventDefault();
    // console.log("event is ",event)
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phoneNo = event.target.pn.value;
    const password = event.target.psw.value;

    myobj = {
      name,
      email,
      phoneNo,
      password
    }

    console.log(name)

    axios.post('http://localhost:3000/user/signup', myobj)
      .then(response => {
        console.log(response)
        window.location.href = '../login/login.html'
        // if(response.status === 201){
        //     alert('succesfully signed up');
        //     window.location.href = '../login/login.html'
        // }
        // else {
        //     console.log('failed to login')
        //     alert('user already exists,please login')
        // }

      })
      .catch(err => {
        console.log(err);
        
      })

     
}
