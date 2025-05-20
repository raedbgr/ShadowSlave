const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  true_name: { type: String },
  age: { type: String },
  vital_status: { type: String },
  rank: { type: String },
  class_name: { type: String },
  aspect: { type: String },
  flaw: { type: String },
  image: { type: String }
});

module.exports = mongoose.model('Character', characterSchema); 