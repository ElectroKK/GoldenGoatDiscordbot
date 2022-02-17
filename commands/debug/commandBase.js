module.exports = {
    name: "",
    // What is put after the bot prefix to run the command
    // Accessed via requiring this file and using commandfile.name
    // Command name

    description: "",
    // Put in help command if needed, accessed via requiring this file and using commandfile.description

    execute(client, message, args, Discord) {
        // Code for commands goes here!
        // These are the four main args you usually use in commands!
        
        // Client returns the client
        // Message returns message
        // Args returns an array of the arguments in a message.
        // Discord returns discord. 
    }
}

// All commands will follow this very same format!
// Everything within this file is easy editable!