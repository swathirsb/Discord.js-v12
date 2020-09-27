const Command = require('../../Structures/Command.js');
const { MessageEmbed } = require('discord.js');
const Gamedig = require('gamedig');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['kz', 'bhop'],
            description: 'This provides kz and Bhop server current players and map information(note: if no players on online it will be shows the server is offline!)',
            category: 'C.s 1.6',
            usage: ''
        })
    }

    async run(message) {
        Gamedig.query({type: "cs16", host: '139.59.6.235', port: '27035'}).then((state) => {
            const players = state.players.map(player => player.name)
            const embed = new MessageEmbed()
                .setTitle(`${state.name}`)
                .setThumbnail(this.client.user.displayAvatarURL())
                .setColor('RANDOM')
                .addField("**__ServerInfo__**", [
                    `**❯ Server IP:** ${state.connect}`,
                    ``
                    `**❯ Steam Connect:** steam://connect/${'139.59.6.235'}:${'40000'}`,
				    `**❯ Current Map:** ${state.map}`,
                    
                    `\u200b`,
                ])
                .addField(`❯ Current Online Players names [${players.length}]`, players.length < 32 ? players.join("\n ") : players.length > 32 ? this.client.utils.trimArray(players) : 'None')
                .setTimestamp()
            message.channel.send(embed)})
    }
}