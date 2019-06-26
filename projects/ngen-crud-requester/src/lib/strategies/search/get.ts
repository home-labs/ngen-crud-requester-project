import { AbstractSearch } from './abstract-search';


export class Get extends AbstractSearch {

    search(url: string, options?: Object): Promise<Response> {
        return super.search(url, options, 'get');
    }

}
