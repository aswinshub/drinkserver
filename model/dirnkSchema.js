
const mongoose = require('mongoose');

const drinkSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    catogery:{type:String,required:true}
});

const Drink = mongoose.model('Drink', drinkSchema);

module.exports = Drink;
