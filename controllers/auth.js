const jwt = require('jsonwebtoken');
const User = require('../models/users')

exports.authenticate = async (req, res, next) => {

    try {
        const token = req.headers.authorization;
        //console.log("auth token",token);
        const userid = jwt.verify(token,"GauravandAnkit");
        //console.log("userid",userid)
        const {id}=userid
        const user=await User.findByPk(id)
        console.log("userfound",JSON.stringify(user));
            req.user = user;
            next();

      } catch(err) {
        console.log(err);
        return res.status(201).json({success: false})
        // err
      }

}