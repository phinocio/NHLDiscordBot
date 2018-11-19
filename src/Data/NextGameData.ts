import fetch from 'node-fetch';
import { api } from '../Api/Routes';
import INextGameData from '../Interfaces/INextGameData';

class NextGameData
{
	private static instance: NextGameData;
	private	gameData: INextGameData;

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
		try
		{
			const response = await fetch(api.nextGame, {
				method: 'get'
			});
			const json = await response.json();
			const date = json.teams[0].nextGameSchedule.dates[0];
			const game = json.teams[0].nextGameSchedule.dates[0].games[0];
			const venue = game.venue;
			const homeTeam = game.teams.home;
			const awayTeam = game.teams.away;

			this.gameData.date = date.date;

			this.gameData.away.team = awayTeam.team.name;

			this.gameData.away.record =
				`${awayTeam.leagueRecord.wins} - ${awayTeam.leagueRecord.losses} - ${awayTeam.leagueRecord.ot}`;

			this.gameData.home.team = homeTeam.team.name;

			this.gameData.home.record =
				`${homeTeam.leagueRecord.wins} - ${homeTeam.leagueRecord.losses} - ${homeTeam.leagueRecord.ot}`;

			this.gameData.venue = venue.name;
		} catch (error)
		{
			console.log(`Error: ${error}`);
		}
	}
}

export default NextGameData;
