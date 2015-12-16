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
    default: '',
  },
  city:{
    type: String,
    default: '',
  },
  department:{
    type: String,
    default: '',
  },
  region:{
    type: String,
    default: '',
  },
  house:{
    type: String,
    default: '',
  },
  block:{
    type: String,
    default: '',
  },
  apartment:{
    type: String,
    default: '',
  },
  zip:{
    type: Number,
    default: '',
  },
  phone:{
    type: Number,
    default: '',
  },
  email:{
    type: String,
    default: '',
  },




});
Company.plugin(autoIncrement.plugin, 'Company');

mongoose.model('Company', Company);
