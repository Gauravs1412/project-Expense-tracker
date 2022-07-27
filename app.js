const express = require('express');

const app = express();


const sequelize = require('./util/database');

const bodyparser = require('body-parser');
const cors = require('cors');

const User = require('./models/users');
const Expense = require('./models/expense');
const Order = require('./models/order');
const Forgotpassword = require('./models/forgotPassword');


const userRoutes = require('./routes/user');
const purchaseRoutes = require('./routes/purchase');
const resetpasswordRoutes = require('./routes/resetpassword');

User.hasMany(Expense);
Expense.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

User.hasMany(Forgotpassword);
Forgotpassword.belongsTo(User);



app.use(bodyparser.json());
app.use(cors());

app.use('/user', userRoutes);
app.use('/purchase',purchaseRoutes);
app.use('/password',resetpasswordRoutes);




sequelize.sync()
   .then(() => {
    app.listen(3000);
   })
   .catch(err => {
    console.log(err);
   })





