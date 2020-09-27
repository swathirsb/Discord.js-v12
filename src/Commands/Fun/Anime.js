const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports = class extends Command {


    constructor(...args) {
		super(...args, {
            aliases: ['animegirl', 'anime'],
            description: 'Provides a custom anime images!',
            category: 'Fun',
            usage: ['cat']
		});
    };
    
    async run(message, args) {
        const subReddits = ["awwnime"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
        const image = await randomPuppy(random);

        const embed = new MessageEmbed()
            .setImage(image)
            .setTitle(`**__here you are ${random} Anime Girl!__**`)
            .setURL(`https://reddit.com/${random}`)
            .setFooter(`From r/${random}`)

        message.channel.send(embed);
    };
};//save it by ctrl+s 