import { AbstractSearch } from './abstract-search';


// concrete strategy
export class Get extends AbstractSearch {

    search(url: string, options?: {}): Promise<Response> {
        return super.search(url, options, 'get');
    }

}
