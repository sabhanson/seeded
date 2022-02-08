const express = require('express');
// const allRoutes = require('./controllers');
const sequelize = require("./config/connection");
const bcrypt = require("bcrypt")
var session = require('express-session')


const app = express();
const PORT = process.env.PORT || 3000;



app.use(express.urlencoded({ extended: true }));
app.use(express.json());




sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
    });
});