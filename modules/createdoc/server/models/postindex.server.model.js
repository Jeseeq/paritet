var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


var postindex = new Schema({

  department:{
    type: String,
    default: '',
  },
  region:{
    type: String,
    default: '',
  },
  city:{
    type: String,
    default: '',
  },
  postal:{
    type: String,
    default: '',
  }
});
mongoose.model('postindex', postindex);
