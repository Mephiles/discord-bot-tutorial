const auth = require('./auth.json');
const Discord = require('discord.js');

const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', function () {
	console.log(`Logged In as ${client.user.tag}`);
});

client.on('messageCreate', function (msg) {
	if (msg.content === '!test') {
		let new_embed = new Discord.MessageEmbed()
			.addField('a', 'b')
			.addField('c', 'd')
			.setColor('#123456')
			.setFooter({ text: `Submitted by: ${msg.author.username}` });
		msg.channel.send({ embeds: [new_embed] });
		//msg.delete();
	}
});

client.login(auth.token);
