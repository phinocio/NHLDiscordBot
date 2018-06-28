const http = require('http');

class Team {
	constructor(id)
	{
		this.abbreviation = '';
		this.active = '';
		this.arena = '';
		this.city = '';
		this.conference = '';
		this.division = '';
		this.id = id;
		this.name = '';
		this.nextGame = '';
		this.roster = '';
		this.timezone = '';

		this.getTeamInfo(id);
		this.getNextGame(id);
	}

	getTeamInfo(id)
	{
		http.get('http://statsapi.web.nhl.com/api/v1/teams/' + id + '?expand=team.roster', (resp) => {
			let data = '';

			// A chunk of data has been recieved.
			resp.on('data', (chunk) => {
				data += chunk;
			});

			// The whole response has been received. Print out the result.
			resp.on('end', () => {
				var d = JSON.parse(data);

				this.abbreviation = d.teams[0].abbreviation;
				this.active = d.teams[0].active;
				this.arena = d.teams[0].venue.name;
				this.city = d.teams[0].venue.city;
				this.conference = d.teams[0].conference;
				this.division = d.teams[0].division;
				this.name = d.teams[0].name;
				this.roster = d.teams[0].roster.roster;
				this.timezone = d.teams[0].venue.timeZone;
			});

		}).on("error", (err) => {
			console.log("Error: " + err.message);
		});
	}

	getNextGame(id)
	{
		http.get('http://statsapi.web.nhl.com/api/v1/teams/' + id + '?expand=team.schedule.next', (resp) => {
			let data = '';

			// A chunk of data has been recieved.
			resp.on('data', (chunk) => {
				data += chunk;
			});

			// The whole response has been received. Print out the result.
			resp.on('end', () => {
				var d = JSON.parse(data);
				this.nextGame = d.teams[0].nextGameSchedule.dates[0].games;
			});

		}).on("error", (err) => {
			console.log("Error: " + err.message);
		});
	}
}

module.exports = Team;