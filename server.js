const express = require("express");
// const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const routes = require("./routes");
const app = express();
// const app=express().use('*', cors());
const PORT = process.env.PORT || 3001;
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const passport = require('./passport');
const user = require('./routes/user')
// const api = require('./routes/api')
const routes = require("./routes");


app.use(function (req, res, next) {

	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

	// Request methods you wish to allow
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

	// Request headers you wish to allow
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader('Access-Control-Allow-Credentials', true);

	// Pass to next layer of middleware
	next();
});

// Sessions
app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		// store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
// app.use(routes);



// Connect to the Mongo DB
var databaseUri = "mongodb://localhost/project";

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect(databaseUri);
};

var dbm = mongoose.connection;

dbm.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

dbm.once("open", function() {
  console.log("Mongoose connection successful.");
});


app.use(user);
// app.use( api);
// app.use( routes)

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});