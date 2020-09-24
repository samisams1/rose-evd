var mongoose = require('mongoose');
var Schema = mongoose.Schema;

pinRequestSchema = new Schema( {
	
	unique_id: Number,
	value: String,
	amount:Number,
	status: String,
}),
PinRequest = mongoose.model('Pin', pinRequestSchema);

module.exports = PinRequest;