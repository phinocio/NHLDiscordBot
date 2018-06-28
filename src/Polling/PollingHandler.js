const Moment = require("moment");

class PollingHandler {

	constructor(team)
	{
		this.masterPolling(team);
	}

	masterPolling(team)
	{
		console.log(team);
	}

}

module.exports = PollingHandler;