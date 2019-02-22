import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AbstractSearch } from './abstract-search';


@Injectable()
export class Delete extends AbstractSearch {

    constructor(
        http: HttpClient
    ) {
        super(http);
    }

    search(url: string, options?: Object): Promise<Response> {
        return super.search(url, options, 'delete');
    }

}
