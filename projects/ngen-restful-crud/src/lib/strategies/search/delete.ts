import { AbstractSearch } from './abstract-search';


export class Delete extends AbstractSearch {

    search(url: string, options?): Promise<Response | Object | null> {
        return super.search(url, options, 'delete');
    }

}
