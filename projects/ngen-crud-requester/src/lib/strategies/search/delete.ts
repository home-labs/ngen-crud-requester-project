import { AbstractSearch } from './abstract-search';


// Concrete strategy
export class Delete extends AbstractSearch {

    search(url: string, options?: object): Promise<Response> {
        return super.search(url, options, 'delete') as Promise<Response>;
    }

}
