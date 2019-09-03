import { Contexts } from './strategies/contexts/namespace';
// use a namespace with two or more nested names as a property kind generated a error when the compiler was doing "build"
import { Search } from './strategies/search/namespace';
import { Send } from './strategies/send/namespace';

import { injectorSingletonReference } from './module';


export class GeneralService {

    private deleteStrategyContext: Contexts.Search;

    private getStrategyContext: Contexts.Search;

    private patchStrategyContext: Contexts.Send;

    private postStrategyContext: Contexts.Send;

    private putStrategyContext: Contexts.Send;

    constructor() {
        this.deleteStrategyContext = new Contexts.Search(injectorSingletonReference.get(Search.Delete));
        this.getStrategyContext = new Contexts.Search(injectorSingletonReference.get(Search.Get));

        this.patchStrategyContext = new Contexts.Send(injectorSingletonReference.get(Send.Patch));
        this.postStrategyContext = new Contexts.Send(injectorSingletonReference.get(Send.Post));
        this.putStrategyContext = new Contexts.Send(injectorSingletonReference.get(Send.Put));
    }

    protected create(url: string, data: object, options?: object): Promise<Response> {
        return this.postStrategyContext.send(this.resolveURL(url), data, options) as Promise<Response>;
    }

    protected read(url: string, options?: object): Promise<object | object[]> {
        return new Promise(
            (accomplish: (r: object | object[]) => void, reject: (reason: any) => void) => {
                this.getStrategyContext.search(url, options).then(
                    (r: object | object[]) => {
                        accomplish(r);
                    }
                ).catch(
                    (e: any) => {
                        reject(e);
                    }
                );
            }
        );
    }

    protected search(url: string, params: object, options?: object): Promise<Response | object[] | string | boolean> {
        return new Promise(
            (accomplish: (r: Response | object[]) => void, reject: (reason: any) => void) => {
                this.postStrategyContext.send(this.resolveURL(url), params, options).then(
                    (r: Response) => {
                        if (r && typeof r === 'object') {
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
                    (e: any) => {
                        reject(e);
                    }
                );
            }
        );
    }

    protected searchByHTTPGetVerb(url: string, params: object, options?: object):
        Promise<Response | object[] | string | boolean> {
        return new Promise(
            (accomplish: (r: Response | object[]) => void, reject: (reason: any) => void) => {
                this.read(this.composeQueryParams(this.resolveURL(url), params), options).then(
                    (r: Response) => {
                            if (r && typeof r === 'object') {
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
                        (e: any) => {
                            reject(e);
                        }
                    );
            }
        );
    }

    protected update(url: string, data: object, options?: object): Promise<Response> {
        return this.patchStrategyContext.send(this.resolveURL(url), data, options) as Promise<Response>;
    }

    protected put(url: string, data: object, options?: object): Promise<Response> {
        return this.putStrategyContext.send(this.resolveURL(url), data, options) as Promise<Response>;
    }

    protected delete(url: string, options?: object): Promise<Response> {
        return this.deleteStrategyContext.search(this.resolveURL(url), options) as Promise<Response>;
    }

    private resolveURL(url: string) {
        return url.trim().replace(/[\n]+/, '');
    }

    private resolveQueryParamAsArray(queryParamName: string, queryParamValue: any[]): string {
        let composed = '';

        queryParamValue.forEach(
            (value) => {
                composed += `${queryParamName}[]=${encodeURI(value)}&`;
            }
        );

        return composed;
    }

    private composeQueryParams(url: string, params: object): string {

        let composed = '';

        Object.keys(params).forEach(
            (k) => {
                if (params[k]) {
                    if (typeof params[k] === 'object' && params[k] instanceof Array) {
                        composed += `${this.resolveQueryParamAsArray(k, params[k])}`;
                    } else {
                        composed += `${k}=${encodeURI(params[k])}&`;
                    }
                }
            }
        );

        composed = composed.slice(0, composed.length - 1);

        if (url[url.length - 1] === '?') {
            composed = `${url}&${composed}`;
        } else {
            composed = `${url}?${composed}`;
        }

        return composed;

    }

}
