const mongoose = require('mongoose');

// creating connections and creating database

// mongoose.connect('mongodb://127.0.0.1:27017/db_name', {
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true
// });

mongoose
	.connect('mongodb://localhost:27017/mongodb_connection_establishing')
	.then(() => console.log('connection successful'))
	.catch((error) => console.log(error));
