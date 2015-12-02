'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
* Question Schema
*/

var QuestionSchema = new Schema({
  questionType: {
    type: String,
    default: 'radio'
  },
  created: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    default: '',
    trim: true,
    required: 'Title cannot be blank'
  },
  content: {
    type: [String],
    default: '',
    trim: true,
    required: 'Question cannot be blank'
  },
  show:  {
    type: [Number],
    default: 0
  },
  hide:  {
    type: [Number],
    default:0
  },
  visible:  {
    type: Boolean,
    default:true
  }

});

mongoose.model('Question', QuestionSchema);
