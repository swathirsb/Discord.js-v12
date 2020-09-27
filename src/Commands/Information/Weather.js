const Command = require('../../Structures/Command');
const weather = require('weather-js'); 
// first type on u r terminal/cmd or powershell!
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['weather', 'wi'],
            description: 'Display information about the weather!',//it is gives when u r type/help weather
            category: 'Information',
            usage: 'u r country or cities name type'
        });
    }

    async run (message, args) {
        weather.find({search: args.join(" "), degreeType: 'F'}, function (error, result) {
            if (error) return message.channel.send(error);
            if (!args[0]) return message.channel.send('Please provide a location')

            if (result === undefined || result.length === 0) return message.channel.send('**Invaild location**');

            var current = result[0].current;
            var location = result[0].location;

            const embed = new MessageEmbed()
            .setDescription(`**${current.skytext}**`)
            .setAuthor(`Weather forecast for ${current.observationpoint}`)
            .setThumbnail(current.imageUrl)
            .setColor(0x111111)
            .addField('**❯Timezone:**', `UTC${location.timezone}`, true)
            .addField('**❯Degree Type:**', 'Celsius', true)
            .addField('**❯Temperature:**', `${current.temperature}°`, true)
            .addField('**❯Wind:**', current.winddisplay, true)
            .addField('**❯Feels like:**', `${current.feelslike}°`, true)
            .addField('**❯Humidity:**', `${current.humidity}%`, true)

            message.channel.send(embed);
        });
    };
};