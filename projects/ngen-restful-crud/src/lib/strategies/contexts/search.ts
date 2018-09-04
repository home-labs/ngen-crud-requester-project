import { AbstractSearch } from '../search/abstract-search';


// Strategy Context
export class Search {

    constructor(private strategy?: AbstractSearch) { }

    search(url: string, options?): Promise<Object | Response | null> {
        return this.strategy.search(url, options);
    }

}
