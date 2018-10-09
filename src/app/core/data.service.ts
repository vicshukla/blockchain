import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {map, tap, catchError} from 'rxjs/operators';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';

import {allBlocks, allTransactions} from 'app/data';
import {Transaction} from "../models/transaction";
import {Block} from "../models/block";
import {BlockChainError} from '../models/blockChainError';
import {PreviousBlock} from '../models/previousBlock';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) {}

  latestBlock: Block = allBlocks[0];

  setLatestBlock(latestBlock: Block): void {
    this.latestBlock = latestBlock;
  }

  getAllTransactions(): Transaction[] {
    return allTransactions;
  }

  getTransactionByHash(hash: string): Transaction {
    return allTransactions.find(transaction => transaction.hash === hash);
  }

  getAllBlocks(): Observable<Block[] | BlockChainError> {
    console.log('Getting all books from the server.');
    return this.http.get<Block[]>('https://blockchain.info/rawblock/$block_hash')
      .pipe(
        catchError(err => this.handleHttpError(err))
      );
  }
  private handleHttpError(error: HttpErrorResponse): Observable<BlockChainError> {
    let dataError = new BlockChainError();
    dataError.errorNumber = 100;
    dataError.message = error.statusText;;
    dataError.friendlyMessage = 'An error occured retrieving data.';
    return ErrorObservable.create(dataError);
  }

  getBlockByHash(hash: string): Observable<Block> {
    return this.http.get<Block>(`/${hash}`, {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Authorization': 'my-token'
      })
    });
  }


  addBlock(newBlock: Block): Observable<Block> {
    return this.http.post<Block>('https://blockchain.info/rawblock/$block_hash', newBlock, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  updateBlock(updatedBlock: Block): Observable<void> {
    return this.http.put<void>(`https://blockchain.info/rawblock/$block_hash/${updatedBlock.hash}`, updatedBlock, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
  deleteBlock(blockHash: string): Observable<void> {
    return this.http.delete<void>(`https://blockchain.info/rawblock/$block_hash/${blockHash}`);
  }
}

