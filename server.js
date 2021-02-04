const createError = require('http-errors');
const express = require('express');
const path = require('path');
const ejs = require('ejs');
const fs = require('fs');
const dotenv = require('dotenv')

dotenv.config()
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'dist'));
app.engine('html', require('ejs').__express);
app.set('view engine', 'html');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dist')));


app.use('/', indexRouter);


app.get('/api/getYearCalendar', (req, res) => {
    fs.readFile('public/static/calendarDate_' + req.query.year + '.json', (err, data) => {
        res.send(data);
    })

})

app.get('/api/getDayPreviewList', (req, res) => {
    fs.readFile('test/mockTask.json', (err, data) => {
        res.send(data);
    })
})

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

app.listen(process.env.PORT, () => {
    console.log("server start")
})