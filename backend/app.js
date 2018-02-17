const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const connectHistoryApiFallback = require("connect-history-api-fallback");

const index = require("./routes/index.js");
const login = require("./routes/login.js");
const signin = require("./routes/signin.js");
const confirm = require("./routes/confirm.js");

const app = express();
const http = require("http").Server(app);
mongoose.connect("mongodb://localhost:27017/test");

app.use(connectHistoryApiFallback());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("port", process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/api/login', login);
app.use('/api/signin', signin);
app.use('/api/confirm', confirm);

http.listen(app.get("port"), function() {
    console.log("server start in " + app.get("port"));
})