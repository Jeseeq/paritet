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

//populate plugin
var deepPopulate = require('mongoose-deep-populate')(mongoose);

var DocumentCategory = new Schema({
  _id : { type: Number },
  category:{
    type: String,
    default: 'default category',
  },

  documents: [{ type: Number, ref: 'Document' }]


});



/**
 * Document Schema
 */
var DocumentSchema = new Schema({
  
  category: {
    type: Number,
    ref: 'DocumentCategory',
    required: 'Must be a category',
  //  childPath:'documents'

  },
  created: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    default: '',
    trim: true,
   // required: 'Title cannot be blank'
  },
  questions: {
    type: [Schema.Types.Mixed],
    //ref: 'Question'
  }
});


DocumentSchema.plugin(autoIncrement.plugin, 'Document');
DocumentCategory.plugin(autoIncrement.plugin, 'DocumentCategory');

DocumentSchema.plugin(deepPopulate);
DocumentCategory.plugin(deepPopulate);

mongoose.model('Document', DocumentSchema);
mongoose.model('DocumentCategory', DocumentCategory);


