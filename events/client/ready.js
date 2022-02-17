module.exports = (Discord, client) => {
    console.log("-----------------------------------------------------------------");
    console.log(`Logged in as ${client.user.username}#${client.user.discriminator}`);       
    console.log("Ready! - Listening to commands");
    console.log("-----------------------------------------------------------------");

    // The following are ways to set the status and status type if you wish

    client.user.setActivity("gg help", { type: "PLAYING"})
    // client.user.setActivity('Running - D.JS Bot Template V3 by snommi', { type: 'WATCHING' });
    // client.user.setActivity('Running - D.JS Bot Template V3 by snommi');
    
    client.user.setStatus('online');
    // Possible Values: online - idle - dnd - invisible
}