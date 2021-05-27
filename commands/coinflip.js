function coinCmd(message) {
    message.channel.send('Подбрасываю монету...')
    var random = Math.floor(Math.random() * 4) + 1; 
    if (random === 1) { 
        message.channel.send(':full_moon: Орёл!')
    } else if (random === 2) { 
        message.channel.send(':new_moon: Решка!')
    } else if (random === 3) { 
        message.channel.send(':last_quarter_moon: Монета упала ребром!')
    }
}
module.exports = coinCmd;