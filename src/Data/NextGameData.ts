import fetch from 'node-fetch';
import { api } from '../Api/Routes';

class NextGameData
{
	private static instance: NextGameData;
	private	 gameData = {
		date: '',
		times: {
			pt: '',
			mt: '',
			ct: '',
			et: '',
			at: '',
			aedt: ''
		},
		away: {
			team: '',
			record: ''
		},
		home: {
			team: '',
			record: ''
		},
		venue: ''
	};

	public static getInstance()
	{
		if (!NextGameData.instance)
		{
			NextGameData.instance = new NextGameData();
		}
		return NextGameData.instance;
	}

	public async getGameData()
	{
		await this.getGame();
		return await this.gameData;
	}

	private async getGame()
	{
		try {
			await fetch(api.nextGame, {
					method: 'get'
				})
					.then(res => res.json())
					.then(json => {
						this.gameData.date = json.teams[0].nextGameSchedule.dates[0].date;

						this.gameData.away.team = json.teams[0].nextGameSchedule.dates[0].games[0].teams.away.team.name;

						this.gameData.away.record = json.teams[0].nextGameSchedule.dates[0].games[0].teams.away.leagueRecord.wins
						+ '-' +
						json.teams[0].nextGameSchedule.dates[0].games[0].teams.away.leagueRecord.losses
						+ '-' +
						json.teams[0].nextGameSchedule.dates[0].games[0].teams.away.leagueRecord.ot;

						this.gameData.home.team = json.teams[0].nextGameSchedule.dates[0].games[0].teams.home.team.name;

						this.gameData.home.record = json.teams[0].nextGameSchedule.dates[0].games[0].teams.home.leagueRecord.wins
							+ '-' +
							json.teams[0].nextGameSchedule.dates[0].games[0].teams.home.leagueRecord.losses
							+ '-' +
							json.teams[0].nextGameSchedule.dates[0].games[0].teams.home.leagueRecord.ot;

						this.gameData.venue = json.teams[0].nextGameSchedule.dates[0].games[0].venue.name;

					});
		}catch (error)
		{
			console.log(`Error: ${error}`);
		}
	}
}

export default NextGameData;
