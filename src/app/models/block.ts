import {StringifyOptions} from "querystring";

export class Block {
    hash: string;
    ver: number;
    prev_block: string;
    mrkl_root: string;
    time: number;
    bits: number;
    nonce: number;
    n_tx: number;
    size: number;
    block_index: number;
    main_chain: true;
    height: number;
    received_time: number;
    relayed_by: string;
    tx: Array<any>;

}
