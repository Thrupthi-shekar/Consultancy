import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Home from '../Home';

// app.js
const express = require('express');
// const app = express();
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/azyad', { useNewUrlParser: true, useUnifiedTopology: true });

// Define ContactForm model
const contactFormSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String
});
const ContactForm = mongoose.model('ContactForm', contactFormSchema);

// ... (rest of the app.js code)

// Handle contact form submission
app.post('/register', (req, res) => {
  const { name, email, phone, message } = req.body;
  const contactForm = new ContactForm({ name, email, phone, message });
  contactForm.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error submitting form');
    } else {
      res.send('Form submitted successfully');
    }
  });
});


const app = express();

app.get(['/', '/contact', '/about-us', '/services', '/blog-news', '/careers'], (req, res) => {
  const html = ReactDOMServer.renderToString(<Home />);
  res.send(`
    <html>
      <head>
        <title>Azyad IT Consulting Services</title>
      </head>
      <body>
        <div id="root">${html}</div>
      </body>
    </html>
  `);
});
