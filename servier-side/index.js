const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const { ObjectID } = require('bson');
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.shsop.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  const servicesCollection = client.db('perfectPolish').collection('services');
  const reviewCollection = client.db('perfectPolish').collection('reviews');

  app.get('/books/:id', (req, res) => {
    booksCollection
      .find({ _id: ObjectID(req.params.id) })
      .toArray((err, booksItems) => {
        res.send(booksItems);
      });
  });

  // data for services
  app.get('/services', (req, res) => {
    servicesCollection.find().toArray((err, items) => {
      res.send(items);
    });
  });

  app.post('/addServices', (req, res) => {
    const newBook = req.body;
    console.log('adding new book', newBook);
    servicesCollection.insertOne(newBook).then((result) => {
      console.log('insertCount', result.insertedCount);
      res.send(result.insertedCount > 0);
    });
  });

  // data for review

  app.get('/reviews', (req, res) => {
    reviewCollection.find().toArray((err, items) => {
      res.send(items);
    });
  });

  app.post('/addReview', (req, res) => {
    const newReview = req.body;
    console.log('adding new book', newReview);
    // const reviewCollection = client.db('boiMela').collection('review');
    reviewCollection.insertOne(newReview).then((result) => {
      console.log('insertCount', result.insertedCount);
      res.send(result.insertedCount > 0);
    });
  });

  app.post('/checkout', (req, res) => {
    const newChecking = req.body;
    booksOrders.insertOne(newChecking).then((result) => {
      console.log(result);
    });
    console.log(newChecking);
  });
});

app.listen(process.env.PORT || port);
