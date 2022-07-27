function forgotPassword(event)
{
    event.preventDefault()
    const email=event.target.email.value

    const obj = {email}
     axios.post("http://localhost:3000/password/forgotpassword",obj)
       .then(response => {
        console.log(response);
       })
       .catch(err => {
        console.log(err)
       })
    
}