import { HttpClient } from "@angular/common/http";


// Abstract Strategy
export abstract class AbstractSearch {

    constructor(
        private http: HttpClient
    ) { }

    search(url: string, options?: {}, method?: 'get' | 'delete'): Promise<Response> {
        return new Promise((accomplish, reject) => {
            this.http[method](url, options).subscribe(
                (r: Response | null) => {
                    if (r) {
                        accomplish(r);
                    } else {
                        accomplish(null);
                    }
                },
                e => {
                    reject(e);
                }
            );
        });
    }

}
