// ================================================================================== No. 12

const mongoose = require('mongoose');

// creating connections and creating database

mongoose
	.connect('mongodb://localhost:27017/mongodb_connection_establishing')
	.then(() => console.log('connection successful'))
	.catch((error) => console.log(error));

// schema => A mongoose schema defines the structure of the document, and defines default values, validators etc.

// now creating schema

const playListSchema = new mongoose.Schema({
	name: {
		// we are using built in validation here
		type: String,
		required: true, // this is to define as this field is mandatory
		unique: true, // name should be unique and not to be replicate
		lowercase: true, // data will only be save in backend in lowercase only
		trim: true, // if there are extra spaces before and after word then it removes this
		minlength: [ 2, 'minimum 2 letters' ], // we can validate that 2 letters should be there and second data is for error message
		maxlength: [ 30, 'maximum letters can only be 30' ] // we can validate that maximum 30 letters should be there and second data is for error message
	},
	courseType: {
		type: String,
		lowercase: true,
		required: true,
		enum: [ 'front end', 'back end', 'database' ] //check with course type that the data should only with the given our values
	},
	videos: Number,
	author: String,
	active: Boolean,
	date: {
		type: Date,
		default: Date.now
	}
});

// ==================================================================================

// creating collection || creating model

const Playlist = new mongoose.model('Playlist', playListSchema);

// ==================================================================================

// just in below line we are importing playlist data
const playListData = require('./playListData');
// updated way of creating document for one document =========
const createDocument = async () => {
	try {
		// const result = await playListData.save();
		// instead of using the above line we write
		const result = await Playlist.insertMany(playListData);
		console.log(result);
	} catch (error) {
		console.log(error);
	}
};

createDocument();

// we have commented the above line which is calling createDocument function because we have already created documents in our db and there is no need to create it again
