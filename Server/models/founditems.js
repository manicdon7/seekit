const mongoose = require('mongoose');

const foundItemSchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  time: { type: Date, required: true },
  place: { type: String, required: true },
  category: { type: String, required: true },
  color: { type: String, required: true },
  description: { type: String, required: true },
  imageURL: { type: String },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  gmail: { type: String }
});

module.exports = mongoose.model('FoundItem', foundItemSchema);
