const math = require('mathjs');

const { MessageEmbed } = require('discord.js');

const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['calculate', 'math'],
			description: 'Get the answer to a math problem',
			category: 'Utilities'
		});
	}

	async run(message, args) {
		if(!args[0]) return message.channel.send('Please provide a question');

        let resp;

        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) {
            return message.channel.send('Please provide a **valid** question')
        }

        const embed = new MessageEmbed()
        .setColor(0x808080)
        .setTitle('Calculator')
        .addField('Question', `\`\`\`css\n${args.join(' ')}\`\`\``)
        .addField('Answer', `\`\`\`css\n${resp}\`\`\``)

        message.channel.send(embed);
	}

};
