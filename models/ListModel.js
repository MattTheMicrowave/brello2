var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var ListSchema = new Schema({	"name" : String,	"items" : Array,	"user" : {		type: Schema.Types.ObjectId,		ref: 'User'	}});

module.exports = mongoose.model('List', ListSchema);
