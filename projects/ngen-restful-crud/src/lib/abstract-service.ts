import { HttpClient } from '@angular/common/http';

import { Strategies } from './strategies/namespace';


export abstract class AbstractService {

    private getStrategyContext: Strategies.Contexts.Search;
    private postStrategyContext: Strategies.Contexts.Send;
    private patchStrategyContext: Strategies.Contexts.Send;
    private putStrategyContext: Strategies.Contexts.Send;
    private deleteStrategyContext: Strategies.Contexts.Search;

    constructor(
        private http: HttpClient
    ) {

        this.getStrategyContext = new Strategies.Contexts.Search(new Strategies.Search.Get(http));
        this.postStrategyContext = new Strategies.Contexts.Send(new Strategies.Send.Post(http));
        this.patchStrategyContext = new Strategies.Contexts.Send(new Strategies.Send.Patch(http));
        this.putStrategyContext = new Strategies.Contexts.Send(new Strategies.Send.Put(http));
        this.deleteStrategyContext = new Strategies.Contexts.Search(new Strategies.Search.Delete(http));
    }

    private composeURLQuery(url: string, params: Object): string {
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

    protected create(url: string, data: Object, options?): Promise<Response> {
        return this.postStrategyContext.send(url, data, options);
    }

    protected get(url: string, options?): Promise<Object> {
        return this.getStrategyContext.search(url, options);
    }

    protected search(url: string, params: Object, options?): Promise<Array<Object>> {
        return new Promise((accomplish, reject) => {
            this.getStrategyContext
                .search(this.composeURLQuery(url, params), options)
                .then(
                    (r: Object) => {
                        if (r instanceof Array) {
                            accomplish(r);
                        } else {
                            accomplish([r]);
                        }
                    }
                ).catch(
                    (e) => {
                        reject(e);
                    }
                );
        });
    }

    protected patch(url: string, data: Object, options?): Promise<Response> {
        return this.patchStrategyContext.send(url, data, options);
    }

    protected put(url: string, data: Object, options?): Promise<Response> {
        return this.putStrategyContext.send(url, data, options);
    }

    protected destroy(url: string, options?): Promise<Object> {
        return this.deleteStrategyContext.search(url, options);
    }

}
