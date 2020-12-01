// REQUIRE OUR MODULES (MONGOOSE)
const mongoose = require('mongoose');

// CREATE SHORTCUT VARIABLE
const db = mongoose.connection;

// CONNECT TO DATABASE SERVER
mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost/menuspoon', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

// CONNECTION LISTENER
db.on('connected', function () {
  console.log(`Connected to MongoDB at ${db.host}: ${db.port}`);
});

