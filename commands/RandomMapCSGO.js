function csgomapCmd(message) {
    var mapcsgo = [ 'Mirage', 'Inferno', 'Overpass', 'Vertigo', 'Nuke', 'Train', 'Dust II', 'Anubis', 'Cache', 'Agency', 'Office' ];
    var RandomMapCSGO = mapcsgo[Math.floor(Math.random() * (mapcsgo.length))];
    message.channel.send('**Я предлагаю Вам поиграть на __' + RandomMapCSGO + '__**  :dart:')  
}
module.exports = csgomapCmd;