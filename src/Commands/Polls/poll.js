const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

const options = [
    '🇦',
    '🇧',
    '🇨',
    '🇩',
    '🇪',
    '🇫',
    '🇬',
    '🇭',
    '🇮',
    '🇯',
    '🇰',
    '🇱',
    '🇲',
    '🇳',
    '🇴',
    '🇵',
    '🇶',
    '🇷',
    '🇸',
    '🇹',
    '🇺',
    '🇻',
    '🇼',
    '🇽',
    '🇾',
    '🇿',
  ];

  const pollLog = {}; 

  function canSendPoll(user_id) {
    if (pollLog[user_id]) {
      const timeSince = Date.now() - pollLog[user_id].lastPoll;
      if (timeSince < 1) {
        return false;
      }
    }
    return true;
  }

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['poll', 'vote'],
			description: 'This provides the ping of the bot',
            category: 'Poll',
            usage: '. <question> <"ans"> <"ans">'
		});
	}

	async run(message, args) {

// Defining the question...
let question = [];

for (let i = 1; i < args.length; i++) {
  if (args[i].startsWith('"')) break;
  else question.push(args[i]);
}

question = question.join(' ');

// Defining the choices...
const choices = [];

const regex = /(["'])((?:\\\1|\1\1|(?!\1).)*)\1/g;
let match;
while (match = regex.exec(args.join(' '))) choices.push(match[2]);

// Creating and sending embed...
let content = [];
for (let i = 0; i < choices.length; i++) content.push(`${options[i]} ${choices[i]}`);
content = content.join('\n');

var embed = new MessageEmbed()
  .setColor('#8CD7FF')
  .setTitle(`**${question}**`)
  .setDescription(content);

message.channel.send(`:bar_chart: ${message.author} started a vote.`, embed)
  .then(async m => {
    for (let i = 0; i < choices.length; i++) await m.react(options[i]);
  });
	}

};
