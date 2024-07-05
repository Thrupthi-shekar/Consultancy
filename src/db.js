// db.js
import { connect, connection, Schema, model } from 'mongoose';

const dbURL = process.env.DB_URL || 'mongodb://localhost:27017/azyad';
connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = connection;
db.on('error', (err) => {
  console.error(err);
  process.exit(1);
});
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const contactSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  message: {
    type: String,
    required: true
  }
});

const Collection = model('Collection', contactSchema);

export { Collection };
