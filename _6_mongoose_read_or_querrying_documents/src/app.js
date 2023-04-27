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

// createDocument();

// we have commented the above line which is calling createDocument function because we have already created documents in our db and there is no need to create it again

// ==================================================== NO. 6

// reading / querrying documents (find)

const getDocument = async () => {
	try {
		const result = await Playlist.find({});
		// const result = await Playlist.find({ name: 'Mongodb' });
		// const result = await Playlist.find({ name: 'Mongodb' }).select({ name: 1 });
		// const result = await Playlist.find({ name: 'Mongodb' }).select({ name: 1 }).limit(1);
		console.log(result);
	} catch (error) {
		console.log(error);
	}
};

getDocument();
