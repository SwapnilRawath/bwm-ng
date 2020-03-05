const express = require('express');
const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://swap:swap123@cluster0-wfhwt.mongodb.net/test?retryWrites=true&w=majority';
//mongoose.connect('mongodb+srv://swap:swap123@cluster0-wfhwt.mongodb.net/test?retryWrites=true&w=majority');
/*mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});*/
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://swap:swap123@cluster0-wfhwt.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("bwm-ng-dev").collection("bwm-collection");
  console.log('Connecting...');
  // perform actions on the collection object
  client.close();
});
mongoose.connection.on('error', err => {
    console.log('Mongoose not connected');
})
mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected');
});
const app = express();

app.get('/rentals', function(req, res) {
    res.json({'success': true});
});

const PORT = process.env.PORT || 3001;

app.listen(3001, function() {
    console.log('Hi I am running');
});
