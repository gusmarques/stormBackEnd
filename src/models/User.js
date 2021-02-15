const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({

      nome:String,
      email:String,
      dateInclusion:String,
      dateChange:String,
      rules:String,
      status:String

});


module.exports = mongoose.model('User',UserSchema);