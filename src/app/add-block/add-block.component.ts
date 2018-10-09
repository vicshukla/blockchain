import {Component, OnInit} from '@angular/core';

import {Block} from "../models/block";
import {DataService} from 'app/core/data.service';
import {stringify} from 'querystring';

@Component({
  selector: 'app-add-block',
  templateUrl: './add-block.component.html',
  styles: []
})
export class AddBlockComponent implements OnInit {

  constructor(private dataService: DataService) {}



  ngOnInit() {}

  saveBlock(formValues: any): void {
    let newBlock: Block = <Block> formValues;
    newBlock.hash = ' ';
    console.log(newBlock);

    this.dataService.addBlock(newBlock)
      .subscribe(
        (data: Block) => console.log(data),
        (err: any) => console.log(err)
      );
  }

}
