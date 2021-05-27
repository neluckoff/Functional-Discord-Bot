function topCmd(Discord, MessageEmbed, message) {
    const embed_top = new Discord.MessageEmbed()
    .setTitle(':boom: Посмотреть топы можно по командам:')
    .setColor(0xFFFF00)
    .setDescription('Внимание! ТОПы смотрятся по всем серверам, на которых есть бот!')
    .addField(':one: '+' &top money', 'Посмотреть ТОП по деньгам на всех серверах') 
    .addField(':two: '+' &top lvl', 'Посмотреть ТОП по уровню на всех серверах')
    .addField(':three: '+' &top msg', 'Посмотреть ТОП по сообщениям на всех серверах')  
    message.channel.send(embed_top);  
}
module.exports = topCmd;