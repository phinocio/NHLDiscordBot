import Discord from 'discord.js';
import { auth } from './Config/Config';
import MessageHandler from './Handlers/MessageHandler';

// bot
class Bot
{
	private TOKEN: string = '';
	private client: Discord.Client;
	private msgHandler: MessageHandler | undefined;

	public constructor()
	{
		this.TOKEN = auth.token;

		this.client = new Discord.Client();

		this.client.on('ready', () => this.ready());
	}

	public async login(): Promise<void>
	{
		try
		{
			await this.client.login(this.TOKEN);
		} catch (err)
		{
			console.error(`Error: ${err.message}`);
		}
	}

	private ready(): void
	{
		console.log(`Logged in as ${this.client.user.tag}!`);
		this.client.user.setActivity('!h or !help');

		this.msgHandler = new MessageHandler(this.client);
		this.msgHandler.handle();
	}
}

export default Bot;
