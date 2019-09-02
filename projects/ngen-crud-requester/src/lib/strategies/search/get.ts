import { AbstractSearch } from './abstract-search';


export class Get extends AbstractSearch {

    search(url: string, options?: object): Promise<object | object[] | Response> {
        return super.search(url, options, 'get');
    }

}
