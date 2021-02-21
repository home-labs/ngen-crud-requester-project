import { Injectable } from '@angular/core';

import { AbstractSearch } from './abstract-search';


@Injectable()
export class Get extends AbstractSearch {

    search(url: string, options?: object): Promise<Response> {
        return super.search(url, options, 'get');
    }

}
