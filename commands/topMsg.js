function topMsgCmd(Discord, MessageEmbed, message, bot ) {
    const fs = require('fs');
    fs.readFile('./profile.json', (err, data) => {
        if (err) {
            console.log(err); 
        } else {
            profileArr = JSON.parse(data);
            var topMsgArr = []
            
            for (var i in profileArr) {
                topMsgArr.push(profileArr[i])
            }
            topMsgArr.sort((a, b) => a.msg < b.msg ? 1 : -1);
            
            for (let index = 0; index < 3; index++) {

            }
            const embed_topMsg = new Discord.MessageEmbed()
            .setTitle('**:pencil:  Топ Самых Общительных **')
            .setColor(0x0080FF)
            //.setAuthor('**Топ по сообщениям**')
            .setThumbnail('https://i.imgur.com/INqz5lP.png')
            .setDescription(
                '**Внимание!\nТоп был высчитан по всем серверам, на которых есть бот!**\n\n' +
                ':one: ┃ **<@!' + topMsgArr[0].id + '>** ┃ :page_facing_up:  ' + topMsgArr[0].sms + ' ┃ ' + topMsgArr[0].fullname + '\n\n' +
                ':two: ┃ **<@!' + topMsgArr[1].id+ '>** ┃ :page_facing_up:  ' + topMsgArr[1].sms + ' ┃ ' + topMsgArr[1].fullname + '\n\n' +
                ':three: ┃ **<@!' + topMsgArr[2].id+ '>** ┃ :page_facing_up:  ' + topMsgArr[2].sms + ' ┃ ' + topMsgArr[2].fullname + '\n\n' 
            )
            .setTimestamp()
            .setFooter('Топ по сообщениям от luckoBOT', 'https://i.imgur.com/BBa2sl0.jpg');
            
            message.channel.send(embed_topMsg); 
        }
    });
}
module.exports = topMsgCmd;