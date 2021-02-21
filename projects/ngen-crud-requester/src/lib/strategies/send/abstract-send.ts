import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export abstract class AbstractSend {

    constructor(
        private http: HttpClient
    ) { }

    send(url: string, data: object, options?: object, method?: 'post' | 'put' | 'patch'):
        Promise<Response> {
        return new Promise(
            (accomplish: (r: Response) => void, reject: (reason: any) => void) => {
                this.http[method as 'post' | 'put' | 'patch'](url, data, options).subscribe(
                    (r: object) => {
                        accomplish(r as Response);
                    },
                    (e: any) => {
                        reject(e);
                    }
                );
            }
        );
    }

}
