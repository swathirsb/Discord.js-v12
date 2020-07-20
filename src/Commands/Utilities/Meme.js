const randomPuppy = require("random-puppy");
const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

   module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['meme']
		});
	}

	async run(message) {
      const subReddits = ["dankmemes", "meme", "memes"]
      const random = subReddits[Math.floor(Math.random() * subReddits.length)]

      const img = await randomPuppy(random);

      const memeEmbed = new MessageEmbed()
      .setColor("RANDOM")
      .setImage(img)
      .setURL(`https://reddit.com/r/${random}`)

      message.channel.send(memeEmbed);
	}
}