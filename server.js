// MENUSPOON

// REQUIRE MODULES AND SET UP SETTING VARIABLES
const express = require('express');
const port = process.env.PORT || 3000;
const morgan = require('morgan');

// ASSIGN ROUTERS
const indexRouter = require('./routes/index');
const restaurantRouter = require('./routes/restaurants');

// CREATE EXPRESS APP
const app = express();

// CONFIGURE SERVER SETTINGS
require('./config/database'); // REQUIRING THE DATABASE
app.set('view engine', 'ejs');

// MOUNT MIDDLEWARE app.use()
app.use(morgan('dev')); // HTTP LOGGER MIDDLEWARE
app.use(express.static('public')); // STATIC MIDDLEWARE
app.use(express.urlencoded({ extended: false })); // BODY PARSER MIDDLEWARE

// TODO: MOUNT ROUTES
app.use('/', indexRouter);
app.use('/restaurants', restaurantRouter)

// TELL THE APP TO LISTEN ON DESIGNATED PORT
app.listen(port, function() {
    console.log(`EXPRESS IS LISTENING ON PORT ${port}...`);
})