const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['clear', 'purge'],
			description: 'This is delete, clear or purge the messages!',
			category: 'Moderation',
			usage: '1'
		});
	}

	async run(message, args) {

        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You can not send this command!');
        const amount = args.join(" ");

        if(!amount) return message.reply('how much message u want to delete?')

        if(amount > 200) return message.reply(`You can not delete message more than 200`)

        if(amount < 1) return message.reply(`please mention some number of message!`)

        await message.channel.messages.fetch({limit: amount}).then(messages => {
            message.channel.bulkDelete(messages
    )});
	message.channel.send('You deleted message sucessfully!')
	}

};