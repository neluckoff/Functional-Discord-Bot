const { checkServerIdentity } = require("tls");

function rateCmd(Discord, MessageEmbed, message, bot, u, profile) {
    var num = message.content.replace(/\D+/g, '');
    num = parseInt(num);
    //console.log(num, profile[message.author.id].money)
    const embed_rate = new Discord.MessageEmbed()
    .setTitle('**Угадай Загаданный Фрукт! :salad:**')
    .setColor(0xFFFF00)
    .setDescription( 'Моя задача в данной игре - задать фрукт из списка\n' +
                    'А твоя - доверится интуиции и отгадать этот фрукт!\n\n' +
                    'Для того, чтобы выбрать - нажми на реакцию под сообшением!\n' +
                    'Список фруктов: 🍓 | 🍌 | 🍍 | 🍐 | 🥝' )

    if (num > profile[message.author.id].money) {
        message.reply('у Вас недостаточно валюты!')
    } else {
        if (num > 99) {
        var chislo 

        message.channel.send(embed_rate)
        .then(sentMessage => {
            sentMessage.react('🍓')
            sentMessage.react('🍌')
            sentMessage.react('🍍')
            sentMessage.react('🍐')
            sentMessage.react('🥝');
            sentMessage.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
            .then(collected => {
                const reaction = collected.first();
                var random = Math.floor(Math.random() * 6) + 1;

                var fruit
                if (random == 1) {
                    fruit = ':strawberry:'
                }
                if (random == 2) {
                    fruit = ':banana:'
                }
                if (random == 3) {
                    fruit = ':pineapple:'
                }
                if (random == 4) {
                    fruit = ':pear:'
                }
                if (random == 5) {
                    fruit = ':kiwi:'
                }
                //console.log(random)
                // :strawberry: | :banana: | :pineapple: | :pear: | :kiwi:
                if (reaction.emoji.name === '🍓') {
                    chislo = 1;
                    if (random == chislo) {
                        message.channel.send('Вы отгадали фрукт и приумножили поставленную сумму! :thumbsup:')
                        profile[message.author.id].money = profile[message.author.id].money + (num * 4);
                    } else {
                        message.channel.send('Вы не отгадали фрукт! Я загадал - ' + fruit)
                        profile[message.author.id].money = profile[message.author.id].money - num;
                    }
                } 
                if (reaction.emoji.name === '🍌') {
                    chislo = 2;
                    if (random == chislo) {
                        message.channel.send('Вы отгадали фрукт и приумножили поставленную сумму! :thumbsup:')
                        profile[message.author.id].money = profile[message.author.id].money + (num * 4);
                    } else {
                        message.channel.send('Вы не отгадали фрукт! Я загадал - ' + fruit)
                        profile[message.author.id].money = profile[message.author.id].money - num;
                    }
                }
                if (reaction.emoji.name === '🍍') {
                    chislo = 3;
                    if (random == chislo) {
                        message.channel.send('Вы отгадали фрукт и приумножили поставленную сумму! :thumbsup:')
                        profile[message.author.id].money = profile[message.author.id].money + (num * 4);
                    } else {
                        message.channel.send('Вы не отгадали фрукт! Я загадал - ' + fruit)
                        profile[message.author.id].money = profile[message.author.id].money - num;
                    }
                }
                if (reaction.emoji.name === '🍐') {
                    chislo = 4;
                    if (random == chislo) {
                        message.channel.send('Вы отгадали фрукт и приумножили поставленную сумму! :thumbsup:')
                        profile[message.author.id].money = profile[message.author.id].money + (num * 4);
                    } else {
                        message.channel.send('Вы не отгадали фрукт! Я загадал - ' + fruit)
                        profile[message.author.id].money = profile[message.author.id].money - num;
                    }
                }
                if (reaction.emoji.name === '🥝') {
                    chislo = 5;
                    if (random == chislo) {
                        message.channel.send('Вы отгадали фрукт и приумножили поставленную сумму! :thumbsup:')
                        profile[message.author.id].money = profile[message.author.id].money + (num * 4);
                    } else {
                        message.channel.send('Вы не отгадали фрукт! Я загадал - ' + fruit)
                        profile[message.author.id].money = profile[message.author.id].money - num;
                    }
                }
            })
            .catch(collected => {
                message.reply('время на раздумия кончилось. Вы потеряли 50% поставленной суммы!');
                profile[message.author.id].money = profile[message.author.id].money - (num / 2);
            });
        });
        const filter = (reaction, user) => {
            return ['🍓', '🍌', '🍍', '🍐', '🥝'].includes(reaction.emoji.name) && user.id === message.author.id;
        };
    } else {
        message.channel.send('Ставку можно сделать начиная со 100 монет!')
    }
}
}
module.exports = rateCmd;
    
    
