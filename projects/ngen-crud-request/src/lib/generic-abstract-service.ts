import { Injectable } from '@angular/core';

import { NGenPattern } from 'ngen-pattern';

import { GeneralService } from './general-service';
import { GenericAbstractProduct } from './generic-abstract-product';


@Injectable()
export abstract class GenericAbstractService<T>
    implements NGenPattern.Creational.AbstractFactory.GenericAbstractFactory<T> {

    private factoryClient: NGenPattern.Creational.AbstractFactory
        .GenericFactoryClient<T>;

    constructor(
        private service: GeneralService,
    ) {
        this.factoryClient = new NGenPattern.Creational.AbstractFactory
            .GenericFactoryClient(this);
    }

    abstract manufacture(response: Response): GenericAbstractProduct<T>;

    protected create(url: string, data: Object, options?: Object): Promise<Response> {
        return this.service.create(url, data, options);
    }

    protected readProduct(url: string, options?: Object):
        Promise<NGenPattern.Creational.AbstractFactory.GenericAbstractProduct<T> |
        Array<NGenPattern.Creational.AbstractFactory.GenericAbstractProduct<T>>> {

        return new Promise(
            (accomplish: Function, reject: Function) => {
                this.service.read(url, options).then(
                    (r: any) => {
                        if (r && typeof r === 'object') {
                            if (r instanceof Array) {
                                accomplish(this.factoryClient
                                    .manufactureCollection(r));
                            } else {
                                accomplish(this.factoryClient.manufacture(r));
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

    protected searchProduct(url: string, params: Object, options?: Object):
        Promise<Array<NGenPattern.Creational.AbstractFactory.GenericAbstractProduct<T>>> {
        return new Promise(
            (accomplish: Function, reject: Function) => {
                this.service.search(url, params, options).then(
                    (r: Array<Object>) => {
                        accomplish(this.factoryClient
                            .manufactureCollection(r));
                    }
                ).catch(
                    e => {
                        reject(e);
                    }
                );
            }
        );
    }

    protected update(url: string, data: Object, options?: Object): Promise<Response> {
        return this.service.update(url, data, options);
    }

    protected put(url: string, data: Object, options?: Object): Promise<Response> {
        return this.service.put(url, data, options);
    }

    protected destroy(url: string, options?: Object): Promise<Response> {
        return this.service.destroy(url, options);
    }

}
