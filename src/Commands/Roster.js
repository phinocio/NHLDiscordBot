const Command = require('./Command');
const Discord = require("discord.js");

class Roster {

	constructor(commandManager) {
		this.commandManager = commandManager;
	}

	handle(message, NHLClient) {
		let embed = new Discord.RichEmbed();
		let roster = {};
		let rosterName = '';
		let rosterNum = '';
		let rosterPos = '';

		for(var i = 0; i < NHLClient.Team.roster.length; i++)
		{
			roster[i] = {
				"name": NHLClient.Team.roster[i].person.fullName,
				"jersey": NHLClient.Team.roster[i].jerseyNumber,
				"position": NHLClient.Team.roster[i].position.abbreviation

			};
		}

		let rosterArray = Object
			.keys(roster)
			.map(key => roster[key]);

		rosterArray.sort(function (a, b) {
			return a.jersey - b.jersey;
		})

		for (var i = 0; i < NHLClient.Team.roster.length; i++) {
			rosterName += rosterArray[i].name + "\n";
			rosterNum += rosterArray[i].jersey + "\n";
			rosterPos += rosterArray[i].position + "\n";
		}

		embed.setTitle(NHLClient.Team.name + " Roster");
		embed.setColor("BLUE");
		embed.addField("Name", rosterName, true);
		embed.addField("Number", rosterNum, true);
		embed.addField("Position", rosterPos, true);

		message.channel.send(embed);
	}
}

module.exports = Roster;
