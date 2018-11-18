// import Help from './Help';
// import Team from './Team';
import NextGame from './NextGame';

class CommandList
{
	private commands: object = {
		'ng|nextgame': {
			command: NextGame,
			description: 'Shows when the next game is',
			usage: 'ng, nextgame'
		}
		// 'h|help': {
		// 	command: Help,
		// 	description: 'Gives help on commands.',
		// 	usage: 'h, help'
		// },
		// 't|team': {
		// 	command: Team,
		// 	description: 'Shows team data.',
		// 	usage: 't, team'
		// }
	};

	public getCommands(): object
	{
		return this.commands;
	}
}

export default CommandList;
