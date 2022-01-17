const crypto = require('crypto');
const keys = require('../keys.json')

const verifiableData = "this need to be verified";

// The signature method takes the data we want to sign, the
// hashing algorithm, and the padding scheme, and generates
// a signature in the form of bytes
const signature = crypto.sign("sha256", Buffer.from(verifiableData), {
    key: keys.private_key,
    padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
    passphrase: 'top secret'
});

console.log(signature.toString("base64"));