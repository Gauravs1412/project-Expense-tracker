async function forgotPassword(event)
{
    const email=event.target.email.value
    const response=await axios.post("http://localhost:3000/user/forgot",email)
    
}