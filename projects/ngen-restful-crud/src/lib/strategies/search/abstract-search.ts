import { HttpClient } from "@angular/common/http";


// Abstract Strategy
export abstract class AbstractSearch {

    constructor(
        private http: HttpClient
    ) { }

    search(url: string, options?: {}, method?: 'get' | 'delete'): Promise<Object> {
        return new Promise((accomplish, reject) => {
            this.http[method](url, options).subscribe(
                (r: Object) => {
                    accomplish(r);
                },
                e => {
                    reject(e);
                }
            );
        });
    }

}
