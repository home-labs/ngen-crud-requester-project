import { HttpClient } from '@angular/common/http';


export abstract class AbstractSend {

    constructor(private http: HttpClient) { }

    send(url: string, data: Object, options?: {}, method?: 'post' | 'put' | 'patch'): Promise<Response> {
        return new Promise((accomplish, reject) => {
            this.http[method](url, data, options).subscribe(
                (r: Response) => {
                    accomplish(r);
                },
                e => {
                    reject(e);
                }
            );
        });
    }

}
