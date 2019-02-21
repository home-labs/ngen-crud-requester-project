import { HttpClient } from '@angular/common/http';

import { Strategies } from './strategies/namespace';


export abstract class AbstractService {

    private getStrategyContext: Strategies.Contexts.Search;
    private postStrategyContext: Strategies.Contexts.Send;
    private patchStrategyContext: Strategies.Contexts.Send;
    private putStrategyContext: Strategies.Contexts.Send;
    private deleteStrategyContext: Strategies.Contexts.Search;

    constructor(
        http?: HttpClient
    ) {
        this.getStrategyContext = new Strategies.Contexts.Search(new Strategies.Search.Get(http));
        this.postStrategyContext = new Strategies.Contexts.Send(new Strategies.Send.Post(http));
        this.patchStrategyContext = new Strategies.Contexts.Send(new Strategies.Send.Patch(http));
        this.putStrategyContext = new Strategies.Contexts.Send(new Strategies.Send.Put(http));
        this.deleteStrategyContext = new Strategies.Contexts.Search(new Strategies.Search.Delete(http));
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

    protected create(url: string, data: Object, options?: Object): Promise<Response> {
        return this.postStrategyContext.send(this.resolveURL(url), data, options);
    }

    // An Array is a Object, so it isn't necessary specify a Array<Object> as return
    // more generic than parent (Response is an Object)
    protected get(url: string, options?: Object): Promise<Object> {
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

    protected search(url: string, params: Object, options?: Object): Promise<Array<Object>> {
        return new Promise(
            (accomplish: Function, reject: Function) => {
                this.get(this.composeQueryParams(this.resolveURL(url), params), options).then(
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

    protected patch(url: string, data: Object, options?: Object): Promise<Response> {
        return this.patchStrategyContext.send(this.resolveURL(url), data, options);
    }

    protected put(url: string, data: Object, options?: Object): Promise<Response> {
        return this.putStrategyContext.send(this.resolveURL(url), data, options);
    }

    protected destroy(url: string, options?: Object): Promise<Response> {
        return this.deleteStrategyContext.search(this.resolveURL(url), options);
    }

}
