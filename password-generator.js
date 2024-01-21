const crypto = require('crypto');

function generatePassword(length){
    if(length < 1) throw new Error("Tamanho inválido.");

    return crypto.randomBytes(length).toString('hex');
}

module.exports = {generatePassword};