import { Message, RichEmbed } from 'discord.js';
import NextGameData from '../Data/NextGameData';
import INextGameData from '../Interfaces/INextGameData';
import Command from './Command';

class NextGame extends Command
{
	constructor()
	{
		super();
	}

	public async handle(msg: Message)
	{
		// do things
		const data = await NextGameData.getInstance();
		const game = await data.getGameData();

		this.respond(msg, game);
	}

	private respond(msg: Message, data: INextGameData)
	{
		const embed = new RichEmbed();
		embed.setTitle(`${data.away.team} (${data.away.record}) @ ${data.home.team} (${data.home.record})`);

		msg.channel.send(embed);
	}
}

export default NextGame;
