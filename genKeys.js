const {
    generateKeyPairSync
} = require('crypto');

const {
    publicKey,
    privateKey,
} = generateKeyPairSync('rsa', {
    modulusLength: 4096,
    publicKeyEncoding: {
        type: 'spki',
        format: 'pem'
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
        cipher: 'aes-256-cbc',
        passphrase: 'top secret'
    }
});

console.log('public key: ' + publicKey, 'private key: ' + privateKey);