const crypto = require('crypto');
const keys = require('./keys.json');

const encryptedData = "DXvYAyr9CJO4RD7c4qGJeYKzQ3LUm9pjQ3cm45MfDdXN1lN9gFPUiR5IAA9/UkByRPxSi4Ox9DoE7k/Ud9n9cxpqzKBrUQIEOgz1XVTzYWJ8gftXwnxtklWHF3XRM94GBGjp6ChiU2xs/oqRKkkuVZd/iiC7ntuzLPIDYlyN0YN1EOhrzy7NK7lGTQuL/vD/u6qE6//Q6yhuRy+zxUzPZceZ59lMVrz+tSV+knNcXlcNSyOYcAs9bGOn4+Qo78F2eXF6/2um7UthrX990b6uR3GoV4PldtJebJLRZiHLgITnI3Z8vFPgV2Vl8k/VWqHTRQwrnVXOEOHdGXtuMSwchvyhyEkJhXQg3STxbQmz1Fl5QsgI2u6bC+l9IfkWoaAqvGBuSf/QSlfgGpO4HrtZuJVUb5qm8znwmlq9lylYJWYEteKwVCDUwnZzVFKdgn3aiOLNqEibiMe45JMpYI2tj71EkGH3UUJAC9YCeH+LQfT3Hp/5JmnTCDuGbHmvWfqZkynonIL0Bypelq0I1UoirGeqzdgEbh5hoyCp+G3NoBPu/BBhMi078ffDowYSOdkGOqNdlqZxODrkjvI9y8OFmiSCuhEkUQ7mhw9unMamCvKy/VOrFSmVHMvMjtqzECDZHK8Ck+aOW3/TZEvEw3vJbf9VkDd+ryPiLjLLgBDDWhY=";

const dataToDecrypt = Buffer.from(encryptedData, "base64");

const decryptedData = crypto.privateDecrypt(
    {
        key: keys.private_key,
        // In order to decrypt the data, we need to specify the
        // same hashing function and padding scheme that we used to
        // encrypt the data in the previous step
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: "sha256",
        passphrase: 'top secret'
    },
    dataToDecrypt
);

// The decrypted data is of the Buffer type, which we can convert to a
// string to reveal the original data
console.log("decrypted data: ", decryptedData.toString());