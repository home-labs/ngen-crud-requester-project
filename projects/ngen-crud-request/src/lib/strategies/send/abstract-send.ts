import { HttpClient } from '@angular/common/http';


export abstract class AbstractSend {

    private _http: HttpClient;

    constructor(
        http: HttpClient
    ) {
        this._http = http;
    }

    send(url: string, data: Object, options?: Object, method?: 'post' | 'put' | 'patch'): Promise<Response> {
        return new Promise(
            (accomplish: Function, reject: Function) => {
                this._http[method](url, data, options).subscribe(
                    (r: Response) => {
                        accomplish(r);
                    },
                    e => {
                        reject(e);
                    }
                );
            }
        );
    }

}
