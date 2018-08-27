import { AbstractSearch } from './abstract-search';


export class Delete extends AbstractSearch {

    search(url: string, options?): Promise<Object> {
        return super.search(url, options, 'delete');
    }

}
