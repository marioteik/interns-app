import * as mongoose from 'mongoose';
 
const notaSchema = new mongoose.Schema({
img: String
//NOT TESTED//
});
 
const Nota = mongoose.model('Nota', notaSchema);

export default Nota;