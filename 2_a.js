const Wallet = require('ethereumjs-wallet');
const keccak256 = require('js-sha3').keccak256;

// keypair
const wallet = Wallet.generate();
 
// privKey
const privKey = wallet.getPrivateKey();
console.log("Before privKey:", privKey,'\n');
console.log("privKey in hex:", privKey.toString('hex'),'\n'); 
// pubKey
const pubKey = wallet.getPublicKey();
console.log("Before pubKey:", pubKey,'\n');
console.log("pubKey in hex:", pubKey.toString('hex'),'\n');
// address
let address = wallet.getAddressString();
console.log("address:", address);
