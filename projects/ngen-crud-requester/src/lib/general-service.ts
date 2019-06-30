import {
    Injectable
} from '@angular/core';

import {
    HttpClient
} from '@angular/common/http';

import { Contexts } from './strategies/contexts/namespace';
// use a namespace with two or more nested names as a property kind generated a error when the compiler was doing "build"
import { Search } from './strategies/search/namespace';
import { Send } from './strategies/send/namespace';

import { injectorReference } from './module';


@Injectable()
export class GeneralService {

    private deleteStrategyContext: Contexts.Search;

    private getStrategyContext: Contexts.Search;

    private patchStrategyContext: Contexts.Send;

    private postStrategyContext: Contexts.Send;

    private putStrategyContext: Contexts.Send;

    constructor(

    ) {

        const
            http = injectorReference.get(HttpClient),
            contextSearchDeleteInstance: Search.Delete = new Search.Delete(http),
            contextSearchGetInstance: Search.Get = new Search.Get(http),
            contextSearchPatchInstance: Send.Patch = new Send.Patch(http),
            contextSearchPostInstance: Send.Post = new Send.Post(http),
            contextSearchPutInstance: Send.Put = new Send.Put(http)
        ;

        this.deleteStrategyContext = new Contexts.Search(contextSearchDeleteInstance);
        this.getStrategyContext = new Contexts.Search(contextSearchGetInstance);

        this.patchStrategyContext = new Contexts.Send(contextSearchPatchInstance);
        this.postStrategyContext = new Contexts.Send(contextSearchPostInstance);
        this.putStrategyContext = new Contexts.Send(contextSearchPutInstance);
    }

    create(url: string, data: Object, options?: Object): Promise<Response> {
        return this.postStrategyContext.send(this.resolveURL(url), data, options);
    }

    // An Array is a Object, so it isn't necessary specify a Array<Object> as return
    // more generic than parent (Response is an Object)
    read(url: string, options?: Object): Promise<Object> {
        return new Promise(
            (accomplish: Function, reject: Function) => {
                this.getStrategyContext.search(url, options).then(
                    (r: Response) => {
                        accomplish(r);
                    }
                ).catch(
                    e => {
                        reject(e);
                    }
                );
            }
        );
    }

    search(url: string, params: Object, options?: Object): Promise<Array<Object>> {
        return new Promise(
            (accomplish: Function, reject: Function) => {
                this.read(this.composeQueryParams(this.resolveURL(url), params), options).then(
                        (r: Array<Object> | null) => {
                            if (r && typeof r == 'object') {
                                if (r instanceof Array) {
                                    accomplish(r);
                                } else {
                                    accomplish([r]);
                                }
                            } else {
                                accomplish(r);
                            }
                        }
                    ).catch(
                        e => {
                            reject(e);
                        }
                    );
            }
        );
    }

    update(url: string, data: Object, options?: Object): Promise<Response> {
        return this.patchStrategyContext.send(this.resolveURL(url), data, options);
    }

    put(url: string, data: Object, options?: Object): Promise<Response> {
        return this.putStrategyContext.send(this.resolveURL(url), data, options);
    }

    delete(url: string, options?: Object): Promise<Response> {
        return this.deleteStrategyContext.search(this.resolveURL(url), options);
    }

    private resolveURL(url: string) {
        return url.trim().replace(/[\n]+/, '');
    }

    private composeQueryParams(url: string, params: Object): string {
        let
            composed = '';

        Object.keys(params).forEach((k) => {
            if (params[k]) {
                composed += `${k}=${encodeURI(params[k])}&`;
            }
        });

        composed = composed.slice(0, composed.length - 1);

        if (url[url.length - 1] == '?') {
            composed = `${url}&${composed}`;
        } else {
            composed = `${url}?${composed}`;
        }

        return composed;
    }

}
