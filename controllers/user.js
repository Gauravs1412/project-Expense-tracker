
const User = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup = async(req, res)=>{
    try {
        
    const { name, email, phoneNo, password } = req.body;
    // console.log("req body",req.body);
    const saltRounds = 10;
    //check if user already exists
    const result = await User.findAll({ where: { email } });
  //console.log(result.length)
  if (result.length>0) {
    
    return res.json({ msg: "User is Already there!!" });
  }
        const hashedPassword = await bcrypt.hash(password, saltRounds);
  // Store hash in database here
  const createUser = await User.create({
    name: name,
    email: email,
    phoneNo: phoneNo,
    password: hashedPassword,
  });
//   console.log(createUser,as ${name} and ${email})
  return res.json({msg:`user ${name} with ${email} is created`})

    } catch (error) {
        console.log(error)

        return res.json({msg:'some error is there'})  
    }
    
}

exports.login=async(req,res)=>{

    try {
        
    const { email, password } = req.body;
//console.log("login",req.body)
    const result=await User.findOne({where:{email}})
    // console.log(result)
    const {name,id}=result
    const password2=result.password
      //console.log(result)
    const boo=await bcrypt.compare(password,password2)
        if (boo==true) {

          console.log("It matches! login successfull")
          const token=jwt.sign({ id:id}, 'GauravandAnkit');
          return res.status(200).json({
            name:name,
            email:email,
            token:token,
            msg:'login successfull' 
          })

        }
        else {
          console.log("Invalid password!");
          console.log(err)
        }

      

    } catch (err) {  //403 -forbidden , 404 - not found , 400-bad request,401-unauthoried,402-payment required
        console.log(err)
        return res.status(201).json({msg:"please enter correct password"})

    }
}





// module.exports = signup;