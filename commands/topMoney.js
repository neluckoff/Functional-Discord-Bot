function topMoneyCmd(Discord, MessageEmbed, message, bot ) {
    const fs = require('fs');
    fs.readFile('./profile.json', (err, data) => {
        if (err) {
            console.log(err); 
        } else {
            profileArr = JSON.parse(data);
            var topMoneyArr = []
            
            for (var i in profileArr) {
                topMoneyArr.push(profileArr[i])
            }
            topMoneyArr.sort((a, b) => a.money < b.money ? 1 : -1);
            
            for (let index = 0; index < 3; index++) {
               // console.log(topMoneyArr[index].id, topMoneyArr[index].fullname, topMoneyArr[index].money);
            }
            const embed_topMoney = new Discord.MessageEmbed()
            .setTitle('**:moneybag:  Топ Богачей  **')
            .setColor(0x0080FF)
            .setThumbnail('https://i.imgur.com/on2JVyA.png')
            .setDescription(
                '**Внимание!\nТоп был высчитан по всем серверам, на которых есть бот!**\n\n' +
                ':one: ┃ **<@!' + topMoneyArr[0].id + '>** ┃ :coin: ' + topMoneyArr[0].money + ' ┃ ' + topMoneyArr[0].fullname + '\n\n' +
                ':two: ┃ **<@!' + topMoneyArr[1].id+ '>** ┃ :coin: ' + topMoneyArr[1].money + ' ┃ ' + topMoneyArr[1].fullname + '\n\n' +
                ':three: ┃ **<@!' + topMoneyArr[2].id+ '>** ┃ :coin: ' + topMoneyArr[2].money  + ' ┃ ' + topMoneyArr[2].fullname  
            )
            .setTimestamp()
            .setFooter('Топ по деньгам от luckoBOT', 'https://i.imgur.com/BBa2sl0.jpg');
            
            message.channel.send(embed_topMoney); 
        }
    });
}
module.exports = topMoneyCmd;