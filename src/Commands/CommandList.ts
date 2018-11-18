// import Help from './Help';
// import Team from './Team';

class CommandList
{
	private commands: object = {
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
