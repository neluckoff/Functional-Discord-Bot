function diceCmd(Discord, MessageEmbed, message, bot, u, profile) {
const { checkServerIdentity } = require("tls");
    var url = message.author.avatarURL(); 
    var num = message.content.replace(/\D+/g, '');
    num = parseInt(num);
    //console.log(num, profile[message.author.id].money)

    if (num > profile[message.author.id].money) {
        message.reply('у Вас недостаточно валюты!')
    } else {
        if (num > 99) {
            var chisArr = [
                1, 2, 3, 4, 5, 6, 7, 8
            ];
            var temp = chisArr.slice();
            function randomChis() {
                var r = Math.floor(Math.random()*temp.length);
                return temp.splice(r, 1);
            }
            var random1 = randomChis()
            var random2 = Math.floor(Math.random() * 6) + 1;
            //console.log(random1, random2)

            var result
            if (random1 < random2) {
                result = 'Победа!'
                profile[message.author.id].money = profile[message.author.id].money + num;
            }
            if (random1 > random2) {
                result = 'Поражение!'
                profile[message.author.id].money = profile[message.author.id].money - num;
            }
            if (random1 == random2) {
                result = 'Ничья!'
            }
        
        const embed_dice = new Discord.MessageEmbed()
        .setColor(0xFFFF00)
        .setAuthor('Кости игрока ' + message.author.username, url)
        .setDescription( 'Результат матча: ' + result)
        .addFields(
            //{ name: '\u200B', value: '\u200B' },
            { name: 'Бросок ' + message.author.username, value: ':game_die: - ' + random2, inline: true },
            { name: '\u200B', value: '\u200B', inline: true },
            { name: 'Бросок luckoBOT', value: ':game_die: - ' + random1, inline: true },
        )
        message.channel.send(embed_dice)
        } else {
            message.channel.send('Ставку можно сделать начиная со 100 монет!')
        }
    }

}
module.exports = diceCmd;