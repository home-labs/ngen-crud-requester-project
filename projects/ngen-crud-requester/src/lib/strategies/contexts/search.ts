import { AbstractSearch } from '../search/abstract-search';


// Strategy Context
export class Search {

    constructor(
        private strategy: AbstractSearch
    ) { }

    search(url: string, options?: object): Promise<Response> {
        return this.strategy.search(url, options);
    }

}
