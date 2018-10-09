import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

import {Block} from "../models/block";
import {DataService} from 'app/core/data.service';
import {BlockChainError} from 'app/models/blockChainError';

@Injectable()
export class BlocksResolverService implements Resolve<Block[] | BlockChainError> {
    constructor(private dataService: DataService) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Block[] | BlockChainError> {
        return this.dataService.getAllBlocks()
            .pipe(
                catchError(err => of(err))
            );
    }

}



