const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const path=require('path');

// app setup
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1/azyad', { 
  // useNewUrlParser: true, useUnifiedTopology: true 
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String
});

const User = mongoose.model('User', userSchema);

// checks wheather the email is exist in DB or not. (Can use in the case of Registration form)
app.post('/api', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).send("Email already exists");
    }
    const newUser = new User({ name, email, phone, message });
    await newUser.save();
    res.send("contact form filled successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error filling in form");
  }
});

app.get('/success',(req,res)=>{
  res.sendFile(path.join(__dirname,'success.html'));
})

app.listen(4000, () => {
  console.log('Server listening on port 4000');
});
