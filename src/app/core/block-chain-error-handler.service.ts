import {Injectable, ErrorHandler} from '@angular/core';
import {BlockChainError} from '../models/blockChainError';

@Injectable()
export class BlockTrackerErrorHandlerService implements ErrorHandler {

  handleError(error: any): void {
    let customError: BlockChainError = new BlockChainError();
    customError.errorNumber = 200;
    customError.message = (<Error> error).message;
    customError.friendlyMessage = 'An error occurred. Please try again.';

    console.log(customError);
  }

  constructor() {}

}
