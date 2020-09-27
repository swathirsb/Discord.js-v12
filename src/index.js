const RushGamerzClient = require('./Structures/RushGamerzClient');
const config = require('../config.json');

const client = new RushGamerzClient(config);
client.start();
