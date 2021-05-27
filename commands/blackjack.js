function blackjackCmd(Discord, MessageEmbed, message, bot, u, profile) {
    const { checkServerIdentity } = require("tls");
    var url = message.author.avatarURL(); 
    var num = message.content.replace(/\D+/g, '');
    num = parseInt(num);
    //console.log(num, profile[message.author.id].money)

    if (num > profile[message.author.id].money) {
        message.reply('у Вас недостаточно валюты!')
    } else {
        if (num > 99) {

        var a = 11;
        var card = [2, 3, 4, 5, 6, 7, 8, 9, 10 ];
        var cardUser = []
        var cardDealer = []
        for (let index = 0; index < 5; index++) {
            cardUser[index] = card[Math.floor(Math.random()*card.length)]; 
            cardDealer[index] = card[Math.floor(Math.random()*card.length)];  
        }

        var cardtotalUser = cardUser[0] + cardUser[1];
        var cardtotalDealer = cardDealer[0] + cardDealer[1];
        var randomDeal

        console.log(cardUser[0], cardUser[1])
        console.log(cardDealer[0], cardDealer[1])

        const embed_blackjack = new Discord.MessageEmbed()
        .setAuthor('БлэкДжэк игрока ' + message.author.username, url)
        .setColor(0xFFFF00)
        .setDescription( 'Игра осуществляется в ТРИ карты!\nВы хотите взять еще одну карту (:thumbsup: ) или оставите свои (:thumbsdown: )?' )
        .addFields(
            //{ name: '\u200B', value: '\u200B' },
            { name: 'Ваши карты: ', value: cardUser[0] +' | ' + cardUser[1], inline: true },
            { name: '\u200B', value: '\u200B', inline: true },
            { name: 'Ваш тотал: ', value: cardtotalUser, inline: true },
        )
        .addFields(
            //{ name: '\u200B', value: '\u200B' },
            { name: 'Карты дилера: ', value: cardDealer[0] +' | ' + cardDealer[1], inline: true },
            { name: '\u200B', value: '\u200B', inline: true },
            { name: 'Тотал дилера: ', value: cardtotalDealer, inline: true },
        )

        message.channel.send(embed_blackjack)
        .then(sentMessage => {
        sentMessage.react('👍');
        sentMessage.react('👎');
        sentMessage.awaitReactions(filter, { max: 1, time: 10000, errors: ['time'] })
        .then(collected => {
            const reaction = collected.first();
        var result

        function proverka() {
            var result
            if ((cardtotalUser > 21 && cardtotalDealer > 21) || (cardtotalDealer == cardtotalUser)) {
                message.reply('Ничья!')
                result = 'Ничья!'
            } else {
                if (((cardtotalUser > cardtotalDealer) && (cardtotalUser < 22)) || (cardtotalUser < 22 && cardtotalDealer > 21)) {
                    message.reply('Победа!')
                    result = 'Победа!'
                    profile[message.author.id].money = profile[message.author.id].money + num;
                } else {
                    if ((cardtotalUser < cardtotalDealer && cardtotalDealer < 22) || (cardtotalUser > 21 && cardtotalDealer < 22)) {
                        message.reply('Поражение!')
                        result = 'Поражение!'
                        profile[message.author.id].money = profile[message.author.id].money - num;
                    }
                }
            }
        }
            if (cardtotalUser <= 21 && cardtotalDealer <= 21) {

                if (reaction.emoji.name === '👍') {
                    message.reply('Вы взяли еще одну карту');
                    cardtotalUser = cardUser[0] + cardUser[1] + cardUser[2]
                    randomDeal = Math.floor(Math.random() * 31) + 1;

                    if (randomDeal >= 15 || (cardtotalUser > cardtotalDealer) || cardtotalDealer <= 15) {
                        cardtotalDealer = cardDealer[0] + cardDealer[1] + cardDealer[2];
                        const embed_blackjack2 = new Discord.MessageEmbed()
                        .setAuthor('БлэкДжэк игрока ' + message.author.username, url)
                        .setColor(0xFFFF00)
                        //.setDescription( 'Резултат:' + result)
                        .addFields(
                            { name: 'Ваши карты: ', value: cardUser[0] +' | ' + cardUser[1] +' | ' + cardUser[2], inline: true },
                            { name: '\u200B', value: '\u200B', inline: true },
                            { name: 'Ваш тотал: ', value: cardtotalUser, inline: true }, 
                        )
                        .addFields(
                            { name: 'Карты дилера: ', value: cardDealer[0] +' | ' + cardDealer[1] +' | ' + cardDealer[2], inline: true },
                            { name: '\u200B', value: '\u200B', inline: true },
                            { name: 'Тотал дилера: ', value: cardtotalDealer, inline: true },    
                        )
                        message.channel.send(embed_blackjack2)

                        proverka();
                    } else {
                        
                        const embed_blackjack2 = new Discord.MessageEmbed()
                        .setAuthor('БлэкДжэк игрока ' + message.author.username, url)
                        .setColor(0xFFFF00)
                        //.setDescription( 'Резултат:' + result)
                        .addFields(
                            { name: 'Ваши карты: ', value: cardUser[0] +' | ' + cardUser[1] +' | ' + cardUser[2], inline: true },
                            { name: '\u200B', value: '\u200B', inline: true },
                            { name: 'Ваш тотал: ', value: cardtotalUser, inline: true }, 
                        )
                        .addFields(
                            { name: 'Карты дилера: ', value: cardDealer[0] +' | ' + cardDealer[1], inline: true },
                            { name: '\u200B', value: '\u200B', inline: true },
                            { name: 'Тотал дилера: ', value: cardtotalDealer, inline: true },    
                        )
                        message.channel.send(embed_blackjack2) 

                        proverka();          
                    }

                } else if (reaction.emoji.name === '👎') {
                    message.reply('Вы отказались брать карту');
                    randomDeal = Math.floor(Math.random() * 31) + 1;
                    if (randomDeal >= 15 || (cardtotalUser > cardtotalDealer) || cardtotalDealer <= 15) {
                        cardtotalDealer = cardDealer[0] + cardDealer[1] + cardDealer[2];
                        
                        const embed_blackjack2 = new Discord.MessageEmbed()
                        .setAuthor('БлэкДжэк игрока ' + message.author.username, url)
                        .setColor(0xFFFF00)
                        //.setDescription( 'Резултат:' + result)
                        .addFields(
                            { name: 'Ваши карты: ', value: cardUser[0] +' | ' + cardUser[1], inline: true },
                            { name: '\u200B', value: '\u200B', inline: true },
                            { name: 'Ваш тотал: ', value: cardtotalUser, inline: true }, 
                        )
                        .addFields(
                            { name: 'Карты дилера: ', value: cardDealer[0] +' | ' + cardDealer[1] +' | ' + cardDealer[2], inline: true },
                            { name: '\u200B', value: '\u200B', inline: true },
                            { name: 'Тотал дилера: ', value: cardtotalDealer, inline: true },    
                        )  
                        message.channel.send(embed_blackjack2) 

                        proverka();
                    } else {
                        
                        const embed_blackjack2 = new Discord.MessageEmbed()
                        .setAuthor('БлэкДжэк игрока ' + message.author.username, url)
                        .setColor(0xFFFF00)
                        //.setDescription( 'Резултат:' + result)
                        .addFields(
                            { name: 'Ваши карты: ', value: cardUser[0] +' | ' + cardUser[1], inline: true },
                            { name: '\u200B', value: '\u200B', inline: true },
                            { name: 'Ваш тотал: ', value: cardtotalUser, inline: true }, 
                        )
                        .addFields(
                            { name: 'Карты дилера: ', value: cardDealer[0] +' | ' + cardDealer[1], inline: true },
                            { name: '\u200B', value: '\u200B', inline: true },
                            { name: 'Тотал дилера: ', value: cardtotalDealer, inline: true },    
                        )    
                        message.channel.send(embed_blackjack2)     
                        proverka();           
                    }               
                }
            }
            })
            
            .catch(collected => {
                message.reply('время на раздумия кончилось! Мы забрали у Вас 50% от поставленной суммы!');
                profile[message.author.id].money = profile[message.author.id].money - (num / 2);
            });
        });
        const filter = (reaction, user) => {
            return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
        };
    } else {
        message.channel.send('Ставку можно сделать начиная со 100 монет!')
    }
}
        
}
module.exports = blackjackCmd;
  