import * as mongoose from 'mongoose';
 
const notaSchema = new mongoose.Schema({
img: Buffer
//NOT TESTED//
});
 
const Nota = mongoose.model('Nota', notaSchema);

export default Nota;