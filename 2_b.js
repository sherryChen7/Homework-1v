// npm-library
const Wallet = require('ethereumjs-wallet');
const keccak256 = require('js-sha3').keccak256;

// keypair
const wallet = Wallet.generate();
 
 
// pubKey
const pubKey = wallet.getPublicKey();
var publish_key_hash = keccak256(pubKey);
//console.log(publish_key_hash,"\n");
publish_key_hash = "0x".concat(publish_key_hash.slice(-40));
console.log('pubKey withOut getAddressString():',publish_key_hash);


// address
let address = wallet.getAddressString();
console.log("pubKey with    getAddressString():", address);
