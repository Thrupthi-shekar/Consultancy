import { MongoClient } from 'mongodb';

const client = new MongoClient('mongodb://localhost:27017', { useUnifiedTopology: true });
const dbName = 'azyad';
const collectionName = 'collection';

const handleFormSubmit = async (event) => {
  event.preventDefault();
  const name = event.target.name.value;
  const email = event.target.email.value;
  const phone = event.target.phone.value;
  const message = event.target.message.value;

  try {
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    await collection.insertOne({ name, email, phone, message });
    console.log('Form submission successful!');
  } catch (error) {
    console.error('Form submission failed:', error);
  }
};

export {handleFormSubmit}