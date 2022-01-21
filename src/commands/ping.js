exports.run = async (client, message, args) => {  
    const m = await message.reply('Calculando Ping...')

    const pingEmbed = {
        title: 'Ping',
        description: `**Ping** \`${m.createdTimestamp - message.createdTimestamp}ms\`.\n**Api** \`${Math.round(client.ws.ping)}ms\`.`,
         color: 'BLACK',
    } 

    m.edit(message.author, {embed: pingEmbed})
}