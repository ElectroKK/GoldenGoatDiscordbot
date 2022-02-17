module.exports = (Discord, client, message) => {

    // console.log(`${message} - ${message.author.username}#${message.author.discriminator}`);
    // // logs all user and bot sent messages, if you do not want this, put // before the line
    
    const prefix = process.env.PREFIX;
const prefix2 = process.env.PREFIX2;
const prefix3 = process.env.PREFIX3;
const prefix4 = process.env.PREFIX4;
if (message.content.startsWith(prefix) || message.content.startsWith(prefix2) || message.content.startsWith(prefix3) || message.content.startsWith(prefix4)) {
//Code 
} else {
return;
}
if (message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/g);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd);

    if (command) command.execute(client, message, args, Discord);
}

// This event right here runs any time a member posts a message. 

// This file is responsible for commands and args registering properly!

// This is a very special file and should not be messed with unless you know exactly what you're doing!