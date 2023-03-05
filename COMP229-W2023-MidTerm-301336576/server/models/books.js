/* 
File name: 
Student’s Name: Mahfuzur Rahman
StudentID : 301336576
Date : Mar 4 2023 
 */
let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
