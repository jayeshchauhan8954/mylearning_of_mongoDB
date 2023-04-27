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
		type: String,
		required: true
	},
	courseType: String,
	videos: Number,
	author: String,
	active: Boolean,
	date: {
		type: Date,
		default: Date.now
	}
});

// ==================================================================================

/*
A mongoose model is a wrapper on the mongoose schema.
A mongoose schema defines the structure of the document,default values, validators, etc. , whereas a mongoose model provides an interface to the database for creating, querying, updating, deleting records, etc.
*/

// creating collection || creating model

const Playlist = new mongoose.model('Playlist', playListSchema);

// ==================================================================================

// create document or insert
// using async and await

// older way of creating document =========
/*
const playListData = new Playlist({
    name: 'React JS',
	courseType: 'Front End',
	videos: 70,
	author: 'Jayesh Chauhan',
	active: true
});

playListData.save();
*/

// updated way of creating document =========
const createDocument = async () => {
	try {
		const playListData = new Playlist({
			name: 'React JS',
			courseType: 'Front End',
			videos: 70,
			author: 'Jayesh Chauhan',
			active: true
		});

		const result = await playListData.save();
		console.log(result);
	} catch (error) {
		console.log(error);
	}
};

createDocument();
