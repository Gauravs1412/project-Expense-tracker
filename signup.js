
function signup(event){
    event.preventDefault();
    // console.log("event is ",event)
    const name = event.target.name;
    const email = event.target.email;
    const phoneNo = event.target.phoneNo;
    const password = event.target.password;

    console.log(name)

    axios.post('http://localhost:3000/user/signup', {name,email,phoneNo,password})
      .then(res => {
        console.log(res);

      })
      .catch(err => {
        console.log(err);
      })
}
