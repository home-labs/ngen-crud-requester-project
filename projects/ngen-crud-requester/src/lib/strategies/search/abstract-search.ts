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

    search(url: string, options?: object, method?: 'get' | 'delete'): Promise<object | object[]> {
        return new Promise(
            (accomplish: (r: object | object[]) => void, reject: (reason: any) => void) => {
                this.http[method](url, options).subscribe(
                    (r: object | object[]) => {
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
