const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/api/contact', (req, res) => {
  const { name, email, phone, message } = req.body;
  // Validate the form data
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: 'Please fill in all fields' });
  }
  // Save the form data to the database
  // ...
  res.json({ message: 'Form submitted successfully' });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
