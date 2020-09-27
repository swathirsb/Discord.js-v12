const Command = require('../../Structures/Command.js');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['R0Nnyy', 'ronnyy'],
			description: 'This provides the pro player of counter-strike 1.6.',
			category: 'Utilities'
		});
	}

	// eslint-disable-next-line no-unused-vars
	async run(message, args) {
		const pogLink = 'https://images-ext-2.discordapp.net/external/3sKmK8Ub9yOp6vcyQQgoHusbZKV9zPb7bo-GlcwHiJg/%3Fsize%3D512/https/cdn.discordapp.com/avatars/482885962662412308/b6c62df4800f7d62a15c2af6814a1529.webp?width=475&height=475';

		const embed = new MessageEmbed()
			.setImage(pogLink)
			.setTitle(`**Pro-Player**`)
			.setFooter(`ProPlayer!`)

		message.channel.send(embed);
	};

};