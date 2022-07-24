const express = require('express');

const app = express();


const sequelize = require('./util/database');

const bodyparser = require('body-parser');
const cors = require('cors');

const User = require('./models/users');
const Expense = require('./models/expense');


const userRoutes = require('./routes/user');

User.hasMany(Expense);
Expense.belongsTo(User);



app.use(bodyparser.json());
app.use(cors());

app.use('/user', userRoutes);


sequelize.sync()
   .then(() => {
    app.listen(3000);
   })
   .catch(err => {
    console.log(err);
   })





