function casinoCmd(Discord, MessageEmbed, message, bot) {
    const embed_casino = new Discord.MessageEmbed()
    .setTitle('**Команды для игры в казино! :slot_machine:**')
    //.setURL('https://discord.js.org/')
    .setColor(0xFFFF00)
    //.setAuthor('Разработчик бота: luckoff#3436', 'https://i.imgur.com/uHN6PVO.png', 'https://vk.com/neluckoff')
    //.setThumbnail('https://i.imgur.com/BBa2sl0.jpg')
    .addField(':one: '+' &fruit <сумма>', 'Игра «‎Угадай Загаданный Фрукт» [x4]') 
    .addField(':two: '+' &dice <сумма>', 'Игра «‎Кости» [x2]')
    .addField(':three: '+' &blackjack <сумма>', 'Игра «‎БлэкДжэк» или «‎21» [x2]')
    .setTimestamp()
    .setFooter('luckoBOT', 'https://i.imgur.com/BBa2sl0.jpg');
    message.channel.send(embed_casino)
    .then(function (message) {
        //message.react("")
        //message.react("")
       //message.pin()
        //message.delete()
     }); 
}
module.exports = casinoCmd;