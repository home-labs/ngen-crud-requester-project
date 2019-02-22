import { AbstractSearch } from './abstract-search';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


// Concrete strategy
@Injectable()
export class Get extends AbstractSearch {

    constructor(
        http: HttpClient
    ) {
        super(http);
    }

    search(url: string, options?: Object): Promise<Response> {
        return super.search(url, options, 'get');
    }

}
