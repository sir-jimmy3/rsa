// To verify the data, we provide the same hashing algorithm and
// padding scheme we provided to generate the signature, along
// with the signature itself, the data that we want to
// verify against the signature, and the public key
const crypto = require('crypto');
const keys = require('../keys.json');

const verifiableData = "this need to be verified";

const signature = "NamD5IPO3WkUNsXPds71XACSsw/mTnSN293K0ZO7tJXggt/ff0MoAsGdvs/EQ2iQduZBBKA6e054WisyKgFKM8bx4ggsl+f8rkASV08+g9z0+tw1llfanyVsNKy0aoTJ++QBiS00cAItxdTK/UQkI3K4MfS2FMXR1mIoeAQG/rh4tTYzuYhW/3RYNN3K+5IBHm4BaccxYCcU/l4RWpBEY6+JkQy1vyhRhZWL4Ei7NP2KY5d1QspVtljMnEzxcMruzrlGVYMB3fJrdC1cJsiG4tKeEvUnq85UFtBF7TQ0TNMZ4TzOk21c0xp2z2OCGnPZjRIR+zfPgvXsGm4gUBCP3QRUwNzZO2ZhU9qYxu70M5KwdDlXE0te1Ys7ITuxSXkfD0mJJYpm9UDFAOogBQTPzNjUU5qpC4Bm4ekG8GiGBjr5hrpfsdVTb3MKVEwqfmgrdTWeDNuQxd94W+mPgTNm0FTVBlLfOyIyHvtcScikoj2vdePGevtEPXTmUuI9Xhmw6kxW80B/4qhzpRAI58QNCh7LM063H8T/U1kv8BO5zih9tFrFPhOEWyFQU25e8lzqYZ76u6CEKXsnv+r4+n5TQlFyXLDKHQSTgx62vqXB5D8v17aOB+Clnibxnqjd/O7MoKwR1BwX6CVvWZv96xpWHvhLKo3vPtYWeHoXF5svAN0=";

const isVerified = crypto.verify(
    "sha256",
    Buffer.from(verifiableData),
    {
        key: keys.public_key,
        padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
    },
    Buffer.from(signature, "base64")
);

// isVerified should be `true` if the signature is valid
console.log("signature verified: ", isVerified);