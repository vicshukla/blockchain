import {NgModule, Optional, SkipSelf, ErrorHandler} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {LoggerService} from './logger.service';
import {DataService} from './data.service';
import {PlainLoggerService} from './plain-logger.service';
import {throwIfAlreadyLoaded} from "app/core/module-import-guard";
import {BlockTrackerErrorHandlerService} from './block-chain-error-handler.service';
import {BlocksResolverService} from './block-resolver.service';
import {AddHeaderInterceptor} from './add-header.interceptor';
import {LogResponseInterceptor} from "app/core/log-response.interceptor";
import {HttpCacheService} from './http-cache.service';
import {CacheInterceptor} from './cache.interceptor';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    LoggerService,
    DataService,
    {provide: ErrorHandler, useClass: BlockTrackerErrorHandlerService},
    {provide: HTTP_INTERCEPTORS, useClass: LogResponseInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AddHeaderInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true},
    BlocksResolverService, ,
    HttpCacheService
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

}
