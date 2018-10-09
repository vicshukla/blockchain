import {Component, OnInit} from '@angular/core';

import {Transaction} from "../models/transaction";

@Component({
  selector: 'app-add-transactionr',
  templateUrl: './add-transaction.component.html',
  styles: []
})
export class AddTransactionComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  saveTransaction(formValues: any): void {
    let newTransaction: Transaction = <any> formValues;
    newTransaction.hash = "";
    console.log(newTransaction);
    console.warn('Save new transaction not yet implemented.');
  }

}
