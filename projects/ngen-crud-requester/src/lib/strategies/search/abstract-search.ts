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

    search(url: string, options?: object, method?: 'get' | 'delete'): Promise<Response> {
        return new Promise(
            (accomplish: (r: Response) => void, reject: (reason: any) => void) => {
                this.http[(method)!](url, options).subscribe(
                    (r: Object) => {
                        if (r || (typeof r === 'number' && r === 0)) {
                            accomplish(r as Response);
                        } else {
                            accomplish((null)!);
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
