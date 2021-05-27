function topLvlCmd(Discord, MessageEmbed, message, bot ) {
    const fs = require('fs');
    fs.readFile('./profile.json', (err, data) => {
        if (err) {
            console.log(err); 
        } else {
            profileArr = JSON.parse(data);
            var topLvlArr = []
            
            for (var i in profileArr) {
                topLvlArr.push(profileArr[i])
            }
            topLvlArr.sort((a, b) => a.lvl < b.lvl ? 1 : -1);
            
            for (let index = 0; index < 3; index++) {

            }
            const embed_topLvl = new Discord.MessageEmbed()
            .setTitle('**:busts_in_silhouette:  Топ по Уровню**')
            .setColor(0x0080FF)
            .setThumbnail('https://i.imgur.com/vKAonIY.png')
            .setDescription(
                '**Внимание!\nТоп был высчитан по всем серверам, на которых есть бот!**\n\n' +
                ':one: ┃ **<@!' + topLvlArr[0].id + '>** ┃ :trophy:  ' + topLvlArr[0].lvl + ' ┃ ' + topLvlArr[0].fullname + '\n\n' +
                ':two: ┃ **<@!' + topLvlArr[1].id+ '>** ┃ :trophy:  ' + topLvlArr[1].lvl + ' ┃ ' + topLvlArr[1].fullname + '\n\n' +
                ':three: ┃ **<@!' + topLvlArr[2].id+ '>** ┃ :trophy:  ' + topLvlArr[2].lvl + ' ┃ ' + topLvlArr[2].fullname + '\n\n'  
            )
            .setTimestamp()
            .setFooter('Топ по уровню от luckoBOT', 'https://i.imgur.com/BBa2sl0.jpg');
            
            message.channel.send(embed_topLvl); 
        }
    });
}
module.exports = topLvlCmd;