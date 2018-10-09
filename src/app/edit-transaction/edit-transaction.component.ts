import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Transaction} from "app/models/transaction";
import {DataService} from 'app/core/data.service';
import {BadgeService} from 'app/services/badge.service';

@Component({
  selector: 'app-edit-transaction',
  templateUrl: './edit-transaction.component.html',
  styles: [],
  providers: [BadgeService]
})
export class EditTransactionComponent implements OnInit {

  selectedTransaction: Transaction;
  currentBadge: string;

  constructor(private route: ActivatedRoute,
    private dataService: DataService,
    private badgeService: BadgeService) {}

  ngOnInit() {
    let transactionID: string = (this.route.snapshot.params['hash']);
    this.selectedTransaction = this.dataService.getTransactionByHash('hash');
    //this.currentBadge = this.badgeService.getTransactionBadge(this.selectedTransaction);
  }

  saveChanges() {
    console.warn('Save Transaction not yet implemented.');
  }
}