import {Component, OnInit, VERSION} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';

import {Block} from "../models/block";
import {Transaction} from "../models/transaction";
import {DataService} from 'app/core/data.service';
import {BlockChainError} from '../models/blockChainError';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  allBlocks: Block[];
  allTransactions: Transaction[];
  latestBlock: Block;


  constructor(private dataService: DataService,
    private title: Title,
    private route: ActivatedRoute) {}


  ngOnInit() {
    let resolvedData: Block[] | BlockChainError = this.route.snapshot.data['resolvedBlocks'];
    if (resolvedData instanceof BlockChainError) {
      console.log(`Dashboard component error: ${resolvedData.friendlyMessage}`);
    }
    else {
      this.allBlocks = resolvedData;
    }
    this.allTransactions = this.dataService.getAllTransactions();
    this.latestBlock = this.dataService.latestBlock;

    this.title.setTitle(`Block Chain ${VERSION.full}`);
  }

  deleteBlock(blockID: string): void {
    this.dataService.deleteBlock(blockID)
      .subscribe(
        (data: void) => {
          let index: number = this.allBlocks.findIndex(block => blockID === blockID);
          this.allBlocks.splice(index, 0);
        },
        (err: any) => console.log(err)
      );
  }

  deleteTransaction(transactionID: string): void {
    console.warn(`Delete transaction not yet implemented (transactionID: ${transactionID}).`);
  }

}
