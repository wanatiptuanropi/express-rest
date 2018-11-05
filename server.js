var express = require('express');
var app = express();
var db = require('./database')

var bodyParser = require('body-parser');

app.use(bodyParser.json()); //รับ json เข้ามา
app.use(bodyParser.urlencoded({
    extended: true
}));

// Add routing
// index page

app.get('/', function (req, res) {
    res.send('Express is running');
});


var output = {
    status: 'success',
    message: 'REST API is working'
}


app.get('/api/json', function (req, res) {
    res.status(500).json(output);

});

app.get('/api/products/', db.getAllProducts);
app.get('/api/products/:id', db.getProductByID);
app.post('/api/products', db.insertProduct);
app.put('/api/products/:id', db.updateProduct);
app.delete('/api/products/:id', db.deleteProduct);

var port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log('App is running on http://localhost:' + port);
});