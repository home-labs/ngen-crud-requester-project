import { HttpClient } from "@angular/common/http";


// Abstract Strategy
export abstract class AbstractSearch {

    private _http: HttpClient;

    constructor(
        http: HttpClient
    ) {
        this._http = http;
    }

    search(url: string, options?: Object, method?: 'get' | 'delete'): Promise<Response> {
        return new Promise(
            (accomplish: Function, reject: Function) => {
                this._http[method](url, options).subscribe(
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
            }
        );
    }

}
