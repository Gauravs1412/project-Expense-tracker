
function signup(event){
    event.preventDefault();
    // console.log("event is ",event)
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phoneNo = event.target.phonenumber.value;
    const password = event.target.psw.value;

    myobj = {
      name,
      email,
      phoneNo,
      password
    }

    console.log(name)

    axios.post('http://localhost:3000/user/signup', myobj)
      .then(res => {
        console.log(res);

      })
      .catch(err => {
        console.log(err);
      })
}
