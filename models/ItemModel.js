var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var ItemSchema = new Schema({	"name" : String	// "tags" : [{	// 		type: Schema.Types.ObjectId,	//  		ref: 'Tag'	// }]});

module.exports = mongoose.model('Item', ItemSchema);
