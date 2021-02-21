import { Injectable } from '@angular/core';

import { AbstractSearch } from './abstract-search';


// Concrete strategy
@Injectable()
export class Delete extends AbstractSearch {

    search(url: string, options?: object): Promise<Response> {
        return super.search(url, options, 'delete');
    }

}
