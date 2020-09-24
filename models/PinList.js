var mongoose = require('mongoose');
var Schema = mongoose.Schema;

pinSchema = new Schema( {
	
	unique_id: Number,
	value: String,
	amount:Number,
	status: String,
}),
Pin = mongoose.model('Pin', pinSchema);

module.exports = Pin;