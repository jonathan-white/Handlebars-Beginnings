const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const exphbs = require("express-handlebars");
const logger = require("morgan");

// Setup the Express App
// ========================================================
const app = express();
const PORT = process.env.PORT || 8080;


// Setup data Middleware
// ========================================================
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Setup Static Public
// ========================================================
app.use(express.static('app/assets'));

// Setup Handlebars
// ========================================================
app.set('views', './app/views');
app.engine("handlebars", exphbs({
	layoutsDir: "./app/views/layouts",
	defaultLayout: "main"
}));
app.set('view engine', "handlebars");


// HTML Routes Middleware
// ========================================================
const htmlRoutes = require("./app/routing/htmlRoutes");
app.use("/", htmlRoutes);

// API Routes Middleware
// ========================================================
const apiRoutes = require("./app/routing/apiRoutes");
app.use("/", apiRoutes);


// Start Listenting
// ========================================================
app.listen(PORT, function() {
	console.log(`App listening on PORT ${PORT}`);
});
