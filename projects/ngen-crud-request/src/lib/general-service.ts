import {
    Injectable,
    Inject
} from '@angular/core';

import { Contexts } from './strategies/contexts/namespace';
import { Strategies } from './strategies/namespace';


@Injectable()
export class GeneralService {

    private deleteStrategyContext: Contexts.Search;
    private getStrategyContext: Contexts.Search;

    private patchStrategyContext: Contexts.Send;
    private postStrategyContext: Contexts.Send;
    private putStrategyContext: Contexts.Send;

    constructor(
        @Inject(Strategies.Search.Delete) private deleteStrategy?: Strategies.Search.Delete,
        @Inject(Strategies.Search.Get) private getStrategy?: Strategies.Search.Get,

        @Inject(Strategies.Send.Patch) private patchStrategy?: Strategies.Send.Patch,
        @Inject(Strategies.Send.Post) private postStrategy?: Strategies.Send.Post,
        @Inject(Strategies.Send.Put) private putStrategy?: Strategies.Send.Put
    ) {
        this.deleteStrategyContext = new Contexts.Search(this.deleteStrategy);
        this.getStrategyContext = new Contexts.Search(this.getStrategy);

        this.patchStrategyContext = new Contexts.Send(this.patchStrategy);
        this.postStrategyContext = new Contexts.Send(this.postStrategy);
        this.putStrategyContext = new Contexts.Send(this.putStrategy);
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

    protected search(url: string, params: Object, options?: Object): Promise<Array<Object>> {
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
