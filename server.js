const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const dbConfig = require('./config/db.js');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const DBURL = dbConfig.url;
const PORT = dbConfig.port;
const LOCAL_ADDRESS = dbConfig.hostname;

mongoose.connect(DBURL, {
}).then(() => {
	console.log("Successfully connected to the database");
}).catch(err => {
	console.log('Could not connect to the database. Exiting now...', err);
	process.exit();
});

app.use(cors());
require('./routes/todo')(app);
app.listen(PORT, LOCAL_ADDRESS, () => {
	console.log(`Server running at http://${LOCAL_ADDRESS}:${PORT}/`);
});
