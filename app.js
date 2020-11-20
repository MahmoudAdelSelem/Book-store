const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const get404 = require('./controllers/404.js')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoute = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoute);
app.use(shopRoutes);

app.use(get404.get404);

app.listen(3000);
