import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AddBlockComponent} from "app/add-block/add-block.component";
import {AddTransactionComponent} from "app/add-transaction/add-transaction.component";
import {DashboardComponent} from "app/dashboard/dashboard.component";
import {EditBlockComponent} from "./edit-block/edit-block.component";
import {EditTransactionComponent} from "app/edit-transaction/edit-transaction.component";
import {BlocksResolverService} from './core/block-resolver.service';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent, resolve: {resolvedBlocks: BlocksResolverService}},
  {path: 'addblock', component: AddBlockComponent},
  {path: 'addtransaction', component: AddTransactionComponent},
  {path: 'edittransaction/:id', component: EditTransactionComponent},
  {path: 'editblock/:id', component: EditBlockComponent},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
