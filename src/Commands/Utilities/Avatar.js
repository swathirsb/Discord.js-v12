const Command = require('../../Structures/Command');
const { MessageEmbed }= require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['avatar', 'profile']
        });
    }

    async run(message) {
        if(message.mentions.users.size){
            let member=message.mentions.users.first()
        if(member){
            const emb = new MessageEmbed().setImage(member.displayAvatarURL({dynamic: true, size: 512})).setTitle(member.username)
            message.channel.send(emb)
            
        }
        else{
            message.channel.send("Sorry none found with that name")

        }
        }else{
            const emb = new MessageEmbed().setImage(message.author.displayAvatarURL({dynamic: true, size: 512}))
            message.channel.send(emb)
        }
    }

};
