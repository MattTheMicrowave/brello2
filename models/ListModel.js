var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var ListSchema = new Schema({	"name" : String,	"items" : Array	});

module.exports = mongoose.model('List', ListSchema);
