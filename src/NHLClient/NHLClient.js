const Team = require('./Team.js');


class NHLClient {
	constructor(id) {
		this.Team = new Team(id);
	}
}

module.exports = NHLClient;