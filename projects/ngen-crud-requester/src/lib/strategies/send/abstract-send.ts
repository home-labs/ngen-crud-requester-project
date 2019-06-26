import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export abstract class AbstractSend {

    constructor(
        private http: HttpClient
    ) { }

    send(url: string, data: Object, options?: Object, method?: 'post' | 'put' | 'patch'): Promise<Response> {
        return new Promise(
            (accomplish: Function, reject: Function) => {
                this.http[method](url, data, options).subscribe(
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
