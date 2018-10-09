import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {HttpCacheService} from 'app/core/http-cache.service';


@Injectable()
export class CacheInterceptor implements HttpInterceptor {
    constructor(private cacheService: HttpCacheService) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // pass along non-cacheable and invalidate cache
        if (req.method !== 'GET') {
            console.log(`Invalidating cache: ${req.method}  ${req.url}`);
            this.cacheService.invalidateCache();
            return next.handle(req);
        }
        //attempt to retrieve a cached response
        const cachedResponse: HttpResponse<any> = this.cacheService.get(req.url);
        //return cached response
        if (cachedResponse) {
            console.log(`Returning a cached response: ${cachedResponse.url}`);
            console.log(cachedResponse);
            return of(cachedResponse);
        }
        //send response to server and add response to cache
        return next.handle(req)
            .pipe(
                tap(event => {
                    if (event instanceof HttpResponse) {
                        console.log(`Adding item to cache: ${req.url}`);
                        this.cacheService.put(req.url, event);
                    }
                })
            );


    }

}