'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  config = require(path.resolve('./config/config')),
  autoIncrement = require('mongoose-auto-increment');

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

// Init autoincrement
var connection = mongoose.createConnection(config.db.uri);
autoIncrement.initialize(connection);


var Company = new Schema({
  _id : { type: Number },
  name:{
    type: String,
    default: 'default company',
  },
  address:{
    type: String
  },
  code:{
    type: Number
  }

});
Company.plugin(autoIncrement.plugin, 'Company');

mongoose.model('Company', Company);
