const express = require('express');

const app = express();


const sequelize = require('./util/database');

const bodyparser = require('body-parser');
const cors = require('cors');

const User = require('./models/users');
const Expense = require('./models/expense');
const Order = require('./models/order');


const userRoutes = require('./routes/user');
const purchaseRoutes = require('./routes/purchase')

User.hasMany(Expense);
Expense.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);



app.use(bodyparser.json());
app.use(cors());

app.use('/user', userRoutes);
app.use('/purchase',purchaseRoutes);


sequelize.sync()
   .then(() => {
    app.listen(3000);
   })
   .catch(err => {
    console.log(err);
   })





