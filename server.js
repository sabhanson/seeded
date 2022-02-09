const path = require('path');
const express = require('express');
var session = require('express-session')
const exphbs = require('express-handlebars');
// const allRoutes = require('./controllers');


const app = express();
const PORT = process.env.PORT || 3000;

const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'secret password',
  cookie: {
    maxAge: 3600,
    httpOnly:true,
    secure:false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));



sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
    });
});