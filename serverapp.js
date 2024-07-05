
import express from 'express';
const app = express();
import { MongoClient as _MongoClient } from 'mongodb';
const MongoClient = _MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'azyad';

// Connect to the MongoDB database
MongoClient.connect(url, function(err, client) {
  if (err) {
    console.error(err);
  } else {
    console.log('Connected to MongoDB');
    const db = client.db(dbName);
    const collection = db.collection('contacts');

    // API endpoint to handle form submission
    app.post('/api/contact', (req, res) => {
      const { name, email, phone, message } = req.body;

      // Insert form data into the MongoDB collection
      collection.insertOne({ name, email, phone, message }, (error, result) => {
        if (error) {
          console.error(error);
          res.status(500).send('Error saving data');
        } else {
          res.send('Data saved successfully!');
        }
      });
    });
  }
});
