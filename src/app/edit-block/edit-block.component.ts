import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Block} from '../models/block';
import {DataService} from 'app/core/data.service';
import {PreviousBlock} from '../models/previousBlock';

@Component({
  selector: 'app-edit-block',
  templateUrl: './edit-block.component.html',
  styles: []
})
export class EditBlockComponent implements OnInit {

  selectedBlock: Block;

  constructor(private route: ActivatedRoute,
    private dataService: DataService) {}

  ngOnInit() {
    let blockHash: string = (this.route.snapshot.params['name']);
    this.dataService.getBlockByHash(blockHash)
      .subscribe(
        (data: Block) => this.selectedBlock = data,
        (err: any) => console.log(err)
      );


    // this.dataService.getPreviousBlockByHash(blockHash)
    //   .subscribe(
    //     (data: PreviousBlock) => console.log(`Previous block title : ${data.blockHash} `)
    //   );
  }

  setLatestBlock(): void {
    this.dataService.setLatestBlock(this.selectedBlock);
  }

  saveChanges(): void {
    this.dataService.updateBlock(this.selectedBlock)
      .subscribe(
        (data: void) => console.log(`${this.selectedBlock.hash} updated successfully. `),
        (err: any) => console.log(err)
      );
  }
}

