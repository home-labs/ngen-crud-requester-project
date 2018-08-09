import { HttpClient } from '@angular/common/http';

import { NGenPattern } from 'ngen-pattern';
import { GenericAbstractProduct } from './generic-abstract-product';

import { StrategyContexts } from './strategies/contexts';
import { Strategies } from './strategies';


export abstract class GenericAbstractService<T> implements NGenPattern.Creational.AbstractFactory.GenericAbstractFactory<T> {

  private factoryClient: NGenPattern.Creational.AbstractFactory.GenericFactoryClient<T>;

  private getStrategyContext: StrategyContexts.Search;
  private postStrategyContext: StrategyContexts.Send;
  private patchStrategyContext: StrategyContexts.Send;
  private putStrategyContext: StrategyContexts.Send;
  private deleteStrategyContext: StrategyContexts.Search;

  constructor(
    private http: HttpClient
  ) {
    this.factoryClient = new NGenPattern.Creational.AbstractFactory.GenericFactoryClient(this);

    this.getStrategyContext = new StrategyContexts.Search(new Strategies.Search.Get(http));
    this.postStrategyContext = new StrategyContexts.Send(new Strategies.Send.Post(http));
    this.patchStrategyContext = new StrategyContexts.Send(new Strategies.Send.Patch(http));
    this.putStrategyContext = new StrategyContexts.Send(new Strategies.Send.Put(http));
    this.deleteStrategyContext = new StrategyContexts.Search(new Strategies.Search.Delete(http));
  }

  abstract manufacture(response: Response): GenericAbstractProduct<T>;

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

  protected getMember(url: string, options?): Promise<NGenPattern.Creational.AbstractFactory.GenericAbstractProduct<T>> {
    return new Promise((accomplish, reject) => {
      this.getStrategyContext.search(url, options)
        .then((r: Response) => {
          accomplish(this.factoryClient.manufacture(r));
        })
        .catch((e) => {
          reject(e);
        });
    });
  }

  protected get(url: string, options?): Promise<Array<NGenPattern.Creational.AbstractFactory.GenericAbstractProduct<T>>> {
    return new Promise((accomplish, reject) => {
      this.getStrategyContext.search(url, options)
        .then((r: Response) => {
          accomplish(this.factoryClient.manufactureCollection(r));
        }).catch((e) => {
          reject(e);
        });
    });
  }

  protected patch(url: string, data: Object, options?): Promise<Response> {
    return this.patchStrategyContext.send(url, data, options);
  }

  protected put(url: string, data: Object, options?): Promise<Response> {
    return this.putStrategyContext.send(url, data, options);
  }

  protected deleteMember(url: string, options?): Promise<Response> {
    return new Promise((accomplish, reject) => {
      this.deleteStrategyContext.search(url, options)
        .then((r: Response) => {
          accomplish(r);
        }).catch((e) => {
          reject(e);
        });
    });
  }

  protected searchCollection(url: string, data: Object, options?): Promise<Array<NGenPattern.Creational.AbstractFactory.GenericAbstractProduct<T>>> {
    return this.get(this.composeURLQuery(url, data), options);
  }

}
