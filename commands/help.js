function helpCmd(Discord, MessageEmbed, message, bot) {
    const embed_help = new Discord.MessageEmbed()
    .setTitle('**Руководство по лучшему боту в мире! :robot:**')
    //.setURL('https://discord.js.org/')
    .setColor(0x0080FF)
    .setAuthor('Разработчик бота: luckoff#3436', 'https://i.imgur.com/uHN6PVO.png', 'https://vk.com/neluckoff')
    .setThumbnail('https://i.imgur.com/BBa2sl0.jpg')
    .addField(':one: '+' &profile', 'Посмотреть свой профиль') 
    .addField(':two: '+' &ping @user <кол-во раз>', 'Позвать спящего друга командой')
    .addField(':three: '+' &coin', 'Решить вопрос подбрасыванием монеты')  
    .addField(':four: '+' &csgomap', 'Пусть бот выберет за Вас карту для игры в CS:GO')
    .addField(':five: '+' &herodota', 'Бот выберет Вам героя, на котором Вы должны сыграть игру в Dota 2')
    .addField(':six: ' + ' &top', 'Узнать команды для просмотра лучших игроков')
    .addField(':seven: ' + ' &casino', 'Узнать команды для игры в казино')
    .setTimestamp()
    .setFooter('luckoBOT', 'https://i.imgur.com/BBa2sl0.jpg');
    message.channel.send(embed_help)
    .then(function (message) {
        //message.react("")
        //message.react("")
       //message.pin()
        //message.delete()
     }); 
}
module.exports = helpCmd;