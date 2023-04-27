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

/*
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

*/

// ==================================================== NO. 7

// The below are comparision operator
/*

$eq => Matches values that are equal to a specified value.
$gt => Matches values that are greater than a specified value.
$gte => Matches values that are greater than or equal to a specified value.
$in => Matches any of the values specified in an array.
$lt => Matches values that are less than a specified value.
$lte => Matches values that are less than or equal to a specified value.
$ne => Mathches all values that are not equal to a specified value.
$nin => Matches none of the values specified in an array.
 


*/

/*

const getDocument = async () => {
	try {
		const result = await Playlist.find({ videos: { $gt: 67 } });
		// the below is used for (in operator)
		// const result = await Playlist.find({ courseType: { $in: [ 'Back End', 'Front End' ] } });
		console.log(result);
	} catch (error) {
		console.log(error);
	}
};

getDocument();

*/

// ====================================================================== No. 8

// logical operators in mongodb

/*

$and => Joins query clauses with alogican AND returns all documents that matches the conditions of both clauses.
$not => Invert the effect of a query expression and retruns documents that do not match the query expression.
$nor => Joins query clauses with a logical NOR returns all documents that fail to match both clauses.
$or => Joins query clauses with a logical OR returns all documents that match the conditions of either clause.

*/

/*
const getDocument = async () => {
	try {
		// the below is for or operator
		// const result = await Playlist.find({ $or: [ { courseType: 'Back End' }, { author: 'Jayesh Chauhan' } ] });
		// the below is for and operator
		const result = await Playlist.find({ $and: [ { courseType: 'Back End' }, { author: 'Jayesh Chauhan' } ] });

		console.log(result);
	} catch (error) {
		console.log(error);
	}
};

getDocument();


*/

// ====================================================================== No. 9

// mongodb sorting and count query

/*

const getDocument = async () => {
	try {
		// this is for count documents
		// const result = await Playlist.find({ author: 'Jayesh Chauhan' }).select({ name: 1 }).countDocuments();
		// this is for sorting the data in assending order
		// const result = await Playlist.find({ author: 'Jayesh Chauhan' }).select({ name: 1 }).sort({ name: 1 });
		// this is for sorting the data in decending order
		const result = await Playlist.find({ author: 'Jayesh Chauhan' }).select({ name: 1 }).sort({ name: -1 });

		console.log(result);
	} catch (error) {
		console.log(error);
	}
};

getDocument();
*/

// ====================================================================== No. 10

// update the documents

const updateDocument = async (id, updates) => {
	try {
		// the below is only to update values
		// const result = await Playlist.updateOne({ _id: id }, { $set: updates });

		// the below is to update and show previous
		// const result = await Playlist.findOneAndUpdate({ _id: id }, { $set: updates });

		// the below is to update and show updated
		const result = await Playlist.findOneAndUpdate({ _id: id }, { $set: updates }, { new: true });

		console.log(result);
	} catch (error) {
		console.log(error);
	}
};

updateDocument('6448cc2054ce3c5c07067208', { name: 'MongoDB' });
