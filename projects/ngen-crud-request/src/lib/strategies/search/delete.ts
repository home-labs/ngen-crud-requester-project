import { AbstractSearch } from './abstract-search';


export class Delete extends AbstractSearch {

    search(url: string, options?: Object): Promise<Response> {
        return super.search(url, options, 'delete');
    }

}
