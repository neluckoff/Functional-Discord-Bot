var profile = []
const Discord = require('discord.js');
const bot = new Discord.Client();
const { MessageEmbed } = require('discord.js');
const fs = require('fs');
const dateFormat = require("dateformat");

const pingCmd = require('./commands/ping.js')
const csgomapCmd = require('./commands/RandomMapCSGO.js');
const heroDota = require('./commands/heroDota.js');
const helpCmd = require('./commands/help.js');
const profileCmd = require('./commands/profile.js');
const coinCmd = require('./commands/coinflip.js');
const topCmd = require('./commands/topList.js');
const topMoneyCmd = require('./commands/topMoney.js');
const topLvlCmd = require('./commands/topLvl.js');
const topMsgCmd = require('./commands/topMsg.js');
const dailyCmd = require('./commands/daily.js');
const rateCmd = require('./commands/rate.js');
const diceCmd = require('./commands/dice.js');
const casinoCmd = require('./commands/casinoList.js');
const blackjackCmd = require('./commands/blackjack.js');
var profileArr = [];

var cmdArr = [
    '&ping', //0
    '&pong', //1
    '&help', //2
    '&profile', //3
    '&coin', //4
    '&csgomap', //5
    '&herodota', //6
    '&top', //7
    '&casino', //8
    '&restart'
]
var topArr = [
    '&top money',
    '&top lvl',
    '&top msg'
]
var casinoArr = [
    '&daily',
    '&fruit', //rate
    '&dice',
    '&blackjack'
]

var regExp = /<([^)]+)>/;
const talkedRecently = new Set();
fs.readFile('./profile.json', (err, data) => { 
    if (err) {
        console.log(err)
    } else {
        profile = JSON.parse(data);
    }
});


bot.on('ready', () => {
    console.log('Запуск бота ' + bot.user.tag + ' прошел успешно.')
    bot.user.setActivity('INST @neluckoff', { type: 'WATCHING' });
})

bot.on('message', (message) => {
    //console.log(profile);
    if (!message.author.bot) {
        let uid = message.author.id
        if (!profile[uid]){ //Если нету профиля, создаем
            profile[uid] = {
                sms:0,
                xp:0,
                lvl:0,
                money:0,
                name:message.author.username,
                id:message.author.id,
                fullname:message.author.tag,
            };
            var u = profile[uid]
        } else {
            var u = profile[uid]
            u.sms++; //Подчет сообщений участника
            u.xp++;
            u.money++; //За каждое сообщение по монетке)
            if (u.xp>= (u.lvl * 50)){ //Если участник написал 50 сообщений, он получает левел
                u.xp = 0;
                u.lvl += 1;
                if (u.lvl > 1) {
                    message.channel.send('**Воу, <@!' + message.author.id + '>, у тебя уже '+ u.lvl + ' уровень!** :partying_face:')
                }
            }   
            fs.writeFile('./profile.json', JSON.stringify(profile, undefined, 4), (err) => {
                if (err) console.log(err);
            });
        }

    }

    if (!message.author.bot) {
        console.log('[' + message.guild.name + '] ' + message.author.username + ': '+ message.content) //логи

        var matches = regExp.exec(message.content);
        if(matches) {
            let msg = message.content.split('>')[0];
            switch (msg + '>') {               
                case cmdArr[0]+' '+ matches[0]:
                    pingCmd(message, talkedRecently, matches)
                    break;
                default:
                    break;
            }
        } else {
            switch (message.content) {
                case cmdArr[2]:
                    helpCmd(Discord, MessageEmbed, message, bot);
                    break;
                case cmdArr[3]:
                    profileCmd(Discord, MessageEmbed, message, u, bot);
                    break;
                case cmdArr[4]:
                    coinCmd(message);
                    break;
                case cmdArr[5]:
                    csgomapCmd(message);
                    break;
                case cmdArr[6]:
                    heroDota(message);
                    break;
                case cmdArr[7]:
                    topCmd(Discord, MessageEmbed, message);
                    break;
                case topArr[0]:
                    topMoneyCmd(Discord, MessageEmbed, message, bot);
                    break;
                case topArr[1]:
                    topLvlCmd(Discord, MessageEmbed, message, bot);
                    break;
                case topArr[2]:
                    topMsgCmd(Discord, MessageEmbed, message, bot);
                    break;
                case casinoArr[0]:
                    dailyCmd(message, talkedRecently, u);
                    break;
                case cmdArr[8]:
                    casinoCmd(Discord, MessageEmbed, message, bot)
                    break;
                case cmdArr[9]:
                    if ( message.author.id == 350927430652788747) {
                        process.exit(1);
                    } else {
                        message.channel.send('У Вас нет доступа к этой команде')
                    }
                    break;
                default:
                    if (message.content.includes(casinoArr[1])) {
                        rateCmd(Discord, MessageEmbed, message, bot, u, profile)
                    }
                    if (message.content.includes(casinoArr[2])) {
                        diceCmd(Discord, MessageEmbed, message, bot, u, profile)
                    }
                    if (message.content.includes(casinoArr[3])) {
                        blackjackCmd(Discord, MessageEmbed, message, bot, u, profile)
                    }
                    break;
            }
        }
    }
   
}) 
      

bot.login('TOKEN')
