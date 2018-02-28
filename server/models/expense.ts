import * as mongoose from 'mongoose';
import typeSchema from './type';
import notaSchema from './nota';
import personSchema from './person';
import priceSchema from './price';
import wbsSchema from './wbs';
import dateinitSchema from './dateinit';
import dateendSchema from './dateend';

// var Schema = mongoose.Schema, 
// ObjectId = Schema.ObjectId;



// const Type = mongoose.model('Type', typeSchema);
// const Wbs = mongoose.model('Wbs', wbsSchema);
// const Price = mongoose.model('Price', priceSchema);
// const Dateinit = mongoose.model('Dateinit', dateinitSchema);
// const Dateend = mongoose.model('Dateend', dateendSchema);
// const Nota = mongoose.model('Nota', notaSchema);

const expenseSchema = new mongoose.Schema({
    //id_: Schema.Types.ObjectId,
    type_id: {type: String, trim: true},
    wbs_id: {type: String, trim: true},
    price_id: {type: String, trim: true},
    dateinit_id: {type: String, trim: true},
    dateend_id: {type: String, trim: true},
    nota_id: {type: String, trim: true}
});

const Expense = mongoose.model('Expense', expenseSchema);  
export default Expense;
 

 
