function profileCmd(Discord, MessageEmbed, message, u, bot) {
    var url = message.author.avatarURL(); //Готово! 
    
    const dateFormat = require("dateformat");
    const embed_profile = new Discord.MessageEmbed() 
    .setTitle(':fire:   Профиль пользователя __' + message.author.username + '__   :fire:')
    .setThumbnail(url)
    .setColor(0x0080FF)
    .addField(':detective: Полное имя: ', message.author.tag)
    .addField(':alarm_clock: Дата создания:', dateFormat(message.author.createdAt, " dd.mm.yyyy h:MM")+' (МСК)')
    .addFields(
        //{ name: '\u200B', value: '\u200B' },
		{ name: ':page_facing_up: Сообщений '+' '+'|'+' '+' ', value: ' '+' '+' '+' '+' '+' '+u.sms, inline: true },
		{ name: ':coin: Кошелек '+' '+'|'+' '+' ', value: ' '+' '+' '+' '+' '+' '+u.money, inline: true },
        { name: ':trophy: Уровень', value: ' '+' '+' '+' '+' '+' '+u.lvl, inline: true },
    )
    .setTimestamp()
    .setFooter( message.author.username, url);
    message.channel.send(embed_profile)  
}
module.exports = profileCmd;