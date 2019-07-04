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
            (accomplish: (r: Response) => void, reject: (e: any) => void) => {
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
            }
        );
    }

}
