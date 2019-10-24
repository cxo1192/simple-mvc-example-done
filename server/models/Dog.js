const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
let DogModel = {};
const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  breed: {
    type: String,
    required: true,
    trim: true,
  },

  age: {
    type: Number,
    required: true,
    min: 0,
  },

  createdDate: {
    type: Number,
    required: true,
  },

});

DogSchema.statics.findByName = (name, callback) => {
  const search = {
    name,
  };

  return DogModel.findOne(search, callback);
};


//   DogSchema.statics.increaseAgeByName(name,age,callback) => {
//     let dog = DogModel.findByName()
//   };


DogModel = mongoose.model('Dog', DogSchema);


module.exports.DogModel = DogModel;
module.exports.DogSchema = DogSchema;
