import {
    Injectable,
    Injector
} from '@angular/core';

import {
    HttpClient,
    HttpXhrBackend,
    HttpHandler
} from '@angular/common/http';


// Abstract Strategy
@Injectable()
export abstract class AbstractSearch {

    private _http: HttpClient;

    constructor() {
        const
            injector: Injector = Injector.create(
                {
                    providers: [
                        {
                            provide: HttpHandler,
                            useValue: new HttpXhrBackend(
                                {
                                    build: () => new XMLHttpRequest
                                }
                            )
                        },
                        {
                            provide: HttpClient,
                            deps: [HttpHandler]
                        }
                    ]
                }
            );

        this._http = injector.get(HttpClient);
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
