// MENUSPOON

// REQUIRE MODULES AND SET UP SETTING VARIABLES
const express = require('express');
const port = process.env.PORT || 3000;
const methodOverride = require('method-override');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');


require('dotenv').config();

// ASSIGN ROUTERS
const indexRouter = require('./routes/index');
const restaurantRouter = require('./routes/restaurants');
const menuRouter = require('./routes/menus');
const foodItemsRouter = require('./routes/foodItems');

// CREATE EXPRESS APP
const app = express();

// CONFIGURE SERVER SETTINGS
require('./config/database'); // REQUIRING THE DATABASE
require('./config/passport'); // REQUIRING PASSPORT
app.set('view engine', 'ejs');

// MOUNT MIDDLEWARE app.use()
app.use(methodOverride('_method'))
app.use(morgan('dev')); // HTTP LOGGER MIDDLEWARE
app.use(express.static('public')); // STATIC MIDDLEWARE
app.use(express.urlencoded({ extended: false })); // BODY PARSER MIDDLEWARE - QUESTION: DOES THIS NEED TO BE TRUE??

// MIDDWARE FOR GOOGLE OAUTH
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

// MOUNT PASSPORT
app.use(passport.initialize());
app.use(passport.session());

// TODO: MOUNT ROUTES
app.use('/', indexRouter);
app.use('/restaurants', restaurantRouter);
app.use('/menus', foodItemsRouter);
app.use('/menus', menuRouter);

// TELL THE APP TO LISTEN ON DESIGNATED PORT
app.listen(port, function() {
    console.log(`EXPRESS IS LISTENING ON PORT ${port}...`);
})