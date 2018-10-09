export class Transaction {
    hash: string;
    ver: number;
    vin_sz: number;
    vout_sz: number;
    lock_time: string;
    size: number;
    relayed_by: string;
    block_height: number;
    tx_index: number;
    inputs: Array<any>;
    out: Array<any>;
}
