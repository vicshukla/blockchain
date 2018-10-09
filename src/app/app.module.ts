import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AddBlockComponent} from './add-block/add-block.component';
import {AddTransactionComponent} from './add-transaction/add-transaction.component';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {EditBlockComponent} from './edit-block/edit-block.component';
import {EditTransactionComponent} from './edit-transaction/edit-transaction.component';
import {CoreModule} from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddBlockComponent,
    EditTransactionComponent,
    EditBlockComponent,
    AddTransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
