import * as mongoose from 'mongoose';
import callIDSchema from './call-id';

const personSchema = new mongoose.Schema({
  name: {
      first: String,
      last: String
  }
});

const Person = mongoose.model('Person', personSchema);

export default Person; 