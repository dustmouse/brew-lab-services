	var connectionString = require('../../configuration/dbConfig.js').connectionString;
	module.exports.conn = require('../../core/pgConnection')(connectionString);
	module.exports.queries = require('../../helpers/queries');

