import { Injectable } from '@angular/core';

import { Strategies } from './strategies/namespace';
import { Search } from './strategies/search/namespace';
import { Send } from './strategies/send/namespace';


@Injectable()
export class GeneralService {

    private deleteStrategyContext: Strategies.Contexts.Search;
    private getStrategyContext: Strategies.Contexts.Search;

    private patchStrategyContext: Strategies.Contexts.Send;
    private postStrategyContext: Strategies.Contexts.Send;
    private putStrategyContext: Strategies.Contexts.Send;

    constructor(
        deleteStrategy: Search.Delete,
        getStrategy: Search.Get,

        patchStrategy: Send.Patch,
        postStrategy: Send.Post,
        putStrategy: Send.Put
    ) {
        this.deleteStrategyContext = new Strategies.Contexts.Search(deleteStrategy);
        this.getStrategyContext = new Strategies.Contexts.Search(getStrategy);

        this.patchStrategyContext = new Strategies.Contexts.Send(patchStrategy);
        this.postStrategyContext = new Strategies.Contexts.Send(postStrategy);
        this.putStrategyContext = new Strategies.Contexts.Send(putStrategy);
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

    destroy(url: string, options?: Object): Promise<Response> {
        return this.deleteStrategyContext.search(this.resolveURL(url), options);
    }

}
