import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017/';
const dbName = 'azyad';
const collectionName = 'collection';

const client = new MongoClient(url);
const db = client.db(dbName);
const collection = db.collection(collectionName);

export const submitContactForm = async (name, email, phone, message) => {
  try {
    const doc = {
      name,
      email,
      phone,
      message,
      submittedAt: new Date()
    };
    await collection.insertOne(doc);
    return { success: true };
  } catch (error) {
    return { success: false, error };
  } finally {
    await client.close();
  }
};
