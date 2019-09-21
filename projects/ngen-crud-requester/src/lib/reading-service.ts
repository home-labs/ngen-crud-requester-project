import { Contexts } from './strategies/contexts/namespace';
// use a namespace with two or more nested names as a property kind generated a error when the compiler was doing "build"
import { Search } from './strategies/search/namespace';
import { Send } from './strategies/send/namespace';

import { injectorSingletonReference } from './module';


export class ReadingService<T> {

    protected postStrategyContext: Contexts.Send;

    private getStrategyContext: Contexts.Search;

    constructor() {
        this.postStrategyContext = new Contexts.Send(injectorSingletonReference.get(Send.Post));
        this.getStrategyContext = new Contexts.Search(injectorSingletonReference.get(Search.Get));
    }

    protected read(url: string, options?: object): Promise<T | T[]> {
        return new Promise(
            (accomplish: (r: T | T[]) => void, reject: (reason: any) => void) => {
                this.getStrategyContext.search(url, options).then(
                    (r: any) => {
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
            (accomplish: (r: Response | object[] | string | boolean) => void, reject: (reason: any) => void) => {
                this.postStrategyContext.send(this.resolveURL(url), params, options).then(
                    (r: Response | object[] | string | boolean) => {
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
        Promise<T[] | Response> {
        return new Promise(
            (accomplish: (r: T[] | Response) => void, reject: (reason: any) => void) => {
                this.getStrategyContext.search(this.composeQueryParams(this.resolveURL(url), params), options).then(
                    (r: any) => {
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

    protected resolveURL(url: string) {
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

        if (params) {
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
        } else {
            composed = url;
        }

        return composed;
    }

}
