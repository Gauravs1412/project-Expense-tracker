
const User = require('../models/users');
const bcrypt = require('bcrypt');

const signup = (req, res)=>{
    const { name, email, phoneNo, password } = req.body;
    console.log(req.body);
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            // Store hash in your password DB.
            if(err){
                console.log('Unable to create new user')
                res.json({message: 'Unable to create new user'})
            }
            User.create({ name, email,phoneNo,password: hash }).then(() => {
                res.status(201).json({message: 'Successfuly create new user'})
            }).catch(err => {
                res.status(403).json(err);
            })

        });
    });
}





module.exports = signup;