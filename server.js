const cons = require('consolidate');
const passport = require('passport');
const express = require('express');
const sassMiddleware = require('node-sass-middleware');
const path = require('path');
const winston = require('winston');
const app = express();
winston.level = 'debug';

// app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use('/src/images', express.static(__dirname + '/src/images'));
app.use('/src/css', express.static(__dirname + '/src/css'));
app.use('/src/js', express.static(__dirname + '/src/js'));
app.use('/vendors', express.static(__dirname + '/vendors'));
app.use('/vendors/images', express.static(__dirname + '/vendors/images'));
app.use('/build/css', express.static(__dirname + '/build/css'));
app.use('/build/images', express.static(__dirname + '/build/images'));
app.use('/build/js', express.static(__dirname + '/build/js'));

app.get('/', function (req, res){
	res.render('index')
})

app.get('/profile', function (req, res){
	res.render('profile')
})

app.get('/login', function (req, res){
	res.render('login')
})

app.get('/logout', function (req, res){
	res.render('login')
})

app.get('/index2', function (req, res){
	res.render('index2')
})

app.get('/index3', function (req, res){
	res.render('index3')
})

app.get('/invoice', function (req, res){
	res.render('invoice')
})

app.get('/level2', function (req, res){
	res.render('level2')
})

app.get('/map', function (req, res){
	res.render('map')
})

app.get('/e-commerce', function (req, res){
	res.render('e-commerce')
})

app.get('/echarts', function (req, res){
	res.render('echarts')
})

app.get('/calendar', function (req, res){
	res.render('calendar')
})

app.get('/chartjs', function (req, res){
	res.render('chartjs')
})

app.get('/chartjs2', function (req, res){
	res.render('chartjs2')
})

app.get('/contacts', function (req, res){
	res.render('contacts')
})

app.get('/fixed-footer', function (req, res){
	res.render('fixed-footer')
})

app.get('/fixed-sidebar', function (req, res){
	res.render('fixed-sidebar')
})

app.get('/form-advanced', function (req, res){
	res.render('form-advanced')
})

app.get('/form-buttons', function (req, res){
	res.render('form-buttons')
})

app.get('/form-upload', function (req, res){
	res.render('form-upload')
})

app.get('/form-validation', function (req, res){
	res.render('form-validation')
})

app.get('/form-wizards', function (req, res){
	res.render('form-wizards')
})

app.get('/form', function (req, res){
	res.render('form')
})

app.get('/general-elements', function (req, res){
	res.render('general-elements')
})

app.get('/glyphicons', function (req, res){
	res.render('glyphicons')
})

app.get('/icons', function (req, res){
	res.render('icons')
})

app.get('/inbox', function (req, res){
	res.render('inbox')
})

app.get('/level2', function (req, res){
	res.render('level2')
})

app.get('/media-gallery', function (req, res){
	res.render('media-gallery')
})

app.get('/morrisjs', function (req, res){
	res.render('morrisjs')
})

app.get('/other-charts', function (req, res){
	res.render('other-charts')
})

app.get('/500', function (req, res){
	res.render('page-500')
})

app.get('/403', function (req, res){
	res.render('page-403')
})

app.get('/404', function (req, res){
	res.render('page-404')
})

app.get('/plain-page', function (req, res){
	res.render('plain-page')
})

app.get('/pricing-tables', function (req, res){
	res.render('pricing-tables')
})

app.get('/project-detail', function (req, res){
	res.render('project-detail')
})

app.get('/projects', function (req, res){
	res.render('projects')
})

app.get('/tables-dynamic', function (req, res){
	res.render('tables-dynamic')
})

app.get('/tables', function (req, res){
	res.render('tables')
})

app.get('/typography', function (req, res){
	res.render('typography')
})

app.get('/widgets', function (req, res){
	res.render('widgets')
})

app.get('/xx', function (req, res){
	res.render('xx')
})

const server = app.listen(process.env.PORT || 5000, function () {
  console.log('Server running at http://0.0.0.0:' + server.address().port)
})
