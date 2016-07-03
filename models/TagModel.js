var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var TagSchema = new Schema({	"label" : String,	"color" : String});

module.exports = mongoose.model('Tag', TagSchema);
