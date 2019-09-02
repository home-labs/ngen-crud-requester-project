import {
    Injectable
} from '@angular/core';
import { HttpClient } from '@angular/common/http';


// Abstract Strategy
@Injectable()
export abstract class AbstractSearch {

    constructor(
        private http: HttpClient
    ) { }

    search(url: string, options?: object, method?: 'get' | 'delete'): Promise<object | object[] | Response> {
        return new Promise(
            (accomplish: (r: object | object[] | Response) => void, reject: (reason: any) => void) => {
                this.http[method](url, options).subscribe(
                    (r: object | object[] | Response) => {
                        if (r) {
                            accomplish(r);
                        } else {
                            accomplish(null);
                        }
                    },
                    (e: any) => {
                        reject(e);
                    }
                );
            }
        );
    }

}
