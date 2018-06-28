const Help = require('./Help');
const Roster = require("./Roster");

class CommandManager {
	constructor()
	{

	}
	getCommandList()
	{
		return {
			"r|roster": {
				"command": Roster,
				"description": "Return a list of the team's roster"
			},
			"h|help": {
				"command": Help,
				"description": "Get help on how to use the bot."
			}
		};
	}
}

module.exports = new CommandManager();
