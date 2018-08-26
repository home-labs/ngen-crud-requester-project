import { HttpClient } from '@angular/common/http';

import { StrategyContexts } from './strategies/contexts';
import { Strategies } from './strategies';


export abstract class AbstractService {

    protected getStrategyContext: StrategyContexts.Search;
    private postStrategyContext: StrategyContexts.Send;
    private patchStrategyContext: StrategyContexts.Send;
    private putStrategyContext: StrategyContexts.Send;
    private deleteStrategyContext: StrategyContexts.Search;

    constructor(
        private http: HttpClient
    ) {

        this.getStrategyContext = new StrategyContexts.Search(new Strategies.Search.Get(http));
        this.postStrategyContext = new StrategyContexts.Send(new Strategies.Send.Post(http));
        this.patchStrategyContext = new StrategyContexts.Send(new Strategies.Send.Patch(http));
        this.putStrategyContext = new StrategyContexts.Send(new Strategies.Send.Put(http));
        this.deleteStrategyContext = new StrategyContexts.Search(new Strategies.Search.Delete(http));
    }

    private composeURLQuery(url: string, data: Object): string {
        let
            composed = '';

        Object.keys(data).forEach((k) => {
            if (data[k]) {
                composed += `${k}=${data[k]}&`;
            }
        });

        composed = composed.slice(0, composed.length - 1);
        composed = `${url}?${encodeURI(composed)}`;

        return composed;
    }

    protected post(url: string, data: Object, options?): Promise<Response> {
        return this.postStrategyContext.send(url, data, options);
    }

    protected get(url: string, options?): Promise<Response> {
        return new Promise((accomplish, reject) => {
            this.getStrategyContext.search(url, options)
                .then((r: Response) => {
                    accomplish(r);
                }).catch((e) => {
                    reject(e);
                });
        });
    }

    protected search(url: string, data: Object, options?): Promise<Response> {
        return this.get(this.composeURLQuery(url, data), options);
    }

    protected patch(url: string, data: Object, options?): Promise<Response> {
        return this.patchStrategyContext.send(url, data, options);
    }

    protected put(url: string, data: Object, options?): Promise<Response> {
        return this.putStrategyContext.send(url, data, options);
    }

    protected delete(url: string, options?): Promise<Response> {
        return new Promise((accomplish, reject) => {
            this.deleteStrategyContext.search(url, options)
                .then((r: Response) => {
                    accomplish(r);
                }).catch((e) => {
                    reject(e);
                });
        });
    }

}
