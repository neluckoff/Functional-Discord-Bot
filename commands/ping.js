function pingCmd(message, talkedRecently, matches) {
    if (talkedRecently.has(message.author.id)) {
        message.channel.send('**Эй,** <@!'+ message.author + '>**, давай потише, следущий раз сможешь позвать только через минуту!** :warning:');
    } else {
        
        let num = message.content.split('>')[1];
        //num.replace(/D/g, '');
        if (num > 10) {
            message.channel.send('<@!' + message.author.id + '> **больше 10 раз я уведомлять не собираюсь!** :no_entry:')
        } else {
            //console.log(num)
            for (let index = 0; index < num; index++) {
                setTimeout(function() {
                    message.channel.send('**Хэй! **' + matches[0] + ' **тебя позвал** <@!' + message.author.id + '>   :star_struck:');
                }, 1000+index*1000);
            }
        }
        talkedRecently.add(message.author.id);
        setTimeout(() => {
        talkedRecently.delete(message.author.id);
        }, 60000);
    }
}
module.exports = pingCmd;