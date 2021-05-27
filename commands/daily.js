function dailyCmd(message, talkedRecently, u) {
    if (talkedRecently.has(message.author.id)) {
        message.channel.send('**Ты чего,** <@!'+ message.author + '>**, получить еще один подарок можно через 24 часа! :hourglass_flowing_sand:');
    } else {
        u.money = u.money + 200;
        message.channel.send('**:gift: Ежедневные 200 монет получены! :thumbsup:**')
    }
    talkedRecently.add(message.author.id);
    setTimeout(() => {
    talkedRecently.delete(message.author.id);
    }, 86400000); 
}
module.exports = dailyCmd;