require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture brand tail tooth blanket crater remind hospital hockey knee swift gas'; 
let testAccounts = [
"0x62dbc0d000cfcf91b2ea1b99b4825c09e560edf39113d9231e16376f7f1e83a6",
"0xc7a3cb736a49e793caeac9c10a9f217b56cae1b4f6434c14d093a1d497674663",
"0xb945b8a58bc9bedcc6388098ea06d49fe2f92f60844d48074f98c08fe8cd34de",
"0xd54a5c2f7dd963ecd1bf3913cb75cc0ef2b37bb364343cef36674fd66162b97f",
"0x000b57b9f8a56fb1c03ae3fee4e4fea6b02cce48d7eecb598ba349ad6eef159d",
"0x610f8d556f3286dd089d7eeed7d4f2de1facdeef9a7c4f1525f95516833585a1",
"0x817d39d11a30806ab69b7b704eb5b5c2a87f395c95e51ba9ac9791bed25fd6fd",
"0x153ba347d2a29047105a7629251a9870970640fbabb765dad051278399aac998",
"0x509c020b6b921e2d42fb4b016a4e55230e2df14003f9ee54bf29f8e93662b2a6",
"0x994b05cbcb70eb67aefd49a7146eceaeaec888508631d1690ccb440ebaaf0a8f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

