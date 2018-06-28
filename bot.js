// JSON config files
const auth = require("./config/auth.json");
const config = require("./config/config.json");

// npm includes
const Discord = require("discord.js");

// Classes
const CommandHandler = require("./src/Handlers/CommandHandler.js");
const NHLClient = require("./src/NHLClient/NHLClient.js");

class Bot {

	constructor() {
		this.client = new Discord.Client();
		this.NHLClient = new NHLClient(config.team.id);
		
		this.CommandHandler = new CommandHandler();
		this.prefix = "!";

		this.login();
		this.onMessage();
		this.total = 0;
		this.price = 1.89;
		this.gamesRemain = 98;

		for (var i = 0; this.gamesRemain > i;)
		{
			this.total += (this.price * this.gamesRemain);
			this.gamesRemain--;
		}

		

		this.client.on("ready", () => {
			console.log("I am ready!");
			console.log(this.total);
		});
		
	}

	login() {
		this.client.login(auth.token);
	}

	onMessage() {
		this.client.on("message", (message) => {
			if (message.content.startsWith(this.prefix) && message.content.length > 1) {
				this.CommandHandler.handle(message, this.prefix, this.NHLClient);
			} else {
				return;
			}
		});
	}
}

const bot = new Bot();
