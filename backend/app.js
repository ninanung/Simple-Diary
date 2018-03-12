const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const connectHistoryApiFallback = require("connect-history-api-fallback");
const fs = require("fs");

const index = require("./routes/index.js");
const login = require("./routes/login.js");
const signin = require("./routes/signin.js");
const confirm = require("./routes/confirm.js");
const User = require("./models/user.js");
const photo = require("./routes/photo.js");
const write = require("./routes/write.js");

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
app.use('/api/changephoto', photo);
app.use('/api/write', write);

const date = new Date();
let whatDay = date.getDay();

function deleteDB(day) {
    const functionDate = new Date();
    const functionDay = functionDate.getDay();
    if(parseInt(day) < parseInt(functionDay)) {
        User.remove({ isConfirmed: false }, function(err, result) {
            if(err) {
                console.log(err);
            }
            else {
                console.log(result);
                console.log("daily deleting success");
                whatDay = functionDate.getDay();
            }
        })
    }
}

http.listen(app.get("port"), function() {
    console.log("server start in " + app.get("port"));
    console.log(whatDay);
    setInterval(() => {
        deleteDB(whatDay);
    }, 21600000 );
})