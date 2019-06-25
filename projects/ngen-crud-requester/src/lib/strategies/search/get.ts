import { AbstractSearch } from './abstract-search';

// Concrete strategy
export class Get extends AbstractSearch {

    search(url: string, options?: Object): Promise<Response> {
        return super.search(url, options, 'get');
    }

}
