const express = require('express');
const routes = require('./routes/index');
const newsRoute = require('./routes/news');
const cors = require('cors');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
var authRoute = require('./routes/auth')

require('dotenv').config()

let app = express();
const PORT = process.env.PORT || 5000;

const dbURL = process.env.MONGO_DB_URL

mongoose.connect(dbURL,{ useNewUrlParser: true }, function(err) {
    if (err) {
        console.log('Error connecting to:' + dbURL)
    }
    else {
        console.log('Connected to: ' + dbURL)
    }
})

//cors dùng để có thể gửi dữ liệu từ cổng localhost:3000 sang cổng localhost:5000
app.use(cors());
app.options('*', cors());

//sử dụng cho middleware phân tích dữ liệu gửi từ client
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', routes);
app.use('/user', authRoute);
app.use('/news', newsRoute);

app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`);
});
