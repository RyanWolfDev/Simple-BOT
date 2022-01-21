const c = require("colors");

module.exports = (client) => {
    console.log(c.red('Logado com: ' + client.user.tag));
}