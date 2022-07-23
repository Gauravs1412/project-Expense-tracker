const express = require('express');

const app = express();


const sequelize = require('./util/database');

const bodyparser = require('body-parser');
const cors = require('cors');


const userRoutes = require('./routes/user');



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





