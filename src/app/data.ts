import {Block} from "./models/block";
import {Transaction} from "app/models/transaction";
import {LatestBlock} from "app/models/latestBlock";

export const allTransactions: Transaction[] = [
    {
        hash: 'b6f6991d03df0e2e04dafffcd6bc418aac66049e2cd74b80f14ac86db1e3f0da',
        ver: 1,
        vin_sz: 1,
        vout_sz: 2,
        lock_time: 'Unavailable',
        size: 258,
        relayed_by: "64.179.201.80",
        block_height: 12200,
        tx_index: 12563028,
        inputs: [


            {
                prev_out: {
                    hash: 'a3e2bcc9a5f776112497a32b05f4b9e5b2405ed9',
                    value: 100000000,
                    tx_index: 12554260,
                    n: 2
                },
                script: '76a914641ad5051edd97029a003fe9efb29359fcee409d88ac'
            }

        ],
        out: [

            {
                value: 98000000,
                hash: '29d6a3540acfa0a950bef2bfdc75cd51c24390fd',
                script: '76a914641ad5051edd97029a003fe9efb29359fcee409d88ac'
            },

            {
                value: 2000000,
                hash: '17b5038a413f5c5ee288caa64cfab35a0c01914e',
                script: '76a914641ad5051edd97029a003fe9efb29359fcee409d88ac',
            },

        ]
    }
];



export const allBlocks: Block[] =[
    {
        hash: '0000000000000bae09a7a393a8acded75aa67e46cb81f7acaa5ad94f9eacd103',
        ver: 1,
        prev_block: '00000000000007d0f98d9edca880a6c124e25095712df8952e0439ac7409738a',
        mrkl_root: '935aa0ed2e29a4b81e0c995c39e06995ecce7ddbebb26ed32d550a72e8200bf5',
        time: 1322131230,
        bits: 437129626,
        nonce: 2964215930,
        n_tx: 22,
        size: 9195,
        block_index: 818044,
        main_chain: true,
        height: 154595,
        received_time: 1322131301,
        relayed_by: '108.60.208.156',
        tx: []
    },

];

export const allLatestBlocks: LatestBlock[] = [
    {
        hash: '0000000000000538200a48202ca6340e983646ca088c7618ae82d68e0c76ef5a',
        time: 1325794737,
        block_index: 841841,
        height: 160778,
        txIndexes: [13950369, 13950510, 13951472]
    }
];