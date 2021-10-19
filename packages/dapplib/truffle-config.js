require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow fringe skull guard render remind humble install clog tackle seek'; 
let testAccounts = [
"0x650e275dcd806ebaa47a5de8f06b1a867d6b67ccaebade71b89a159bc5498590",
"0x88b4a44f00f3b6c25acb608febde553368244e1abdd1f93fb332779e2afee906",
"0x45a49e982cbf8d3f894849333ef725bed13cb7f3c5c89b919efd8f468de64df8",
"0x24807f419fc88730a3621bf3946a84bdb934d333f90ee3265635b14bc456401f",
"0x5d7938c2a8a086ee62fc6818b27cf5f79cc2cd3f6eab39a65700146de659d823",
"0xe5027de0c2730cc2084670ffa3950fc2ca9e106b2862fc0f6fdc72c500dcc7fc",
"0xb013d2e062444a4c755929f6f491fa5acffc4318faf197887aa05d0719127473",
"0x4028dddc3987d6fcc575c220cd89c0688fc9d53d1c9a5dd0ba4c3db25b157997",
"0x7a00bbe7a894c491323e4f2a40dda5da09e4d106700da3f42b2507b710998917",
"0xeeab31e172470bb7c27568379e8534a9a35d5a7b64169fe431d9633d4cd4c04f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


