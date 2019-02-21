import { HttpClient } from '@angular/common/http';

import { AbstractService } from './abstract-service';

import { NGenPattern } from 'ngen-pattern';
import { GenericAbstractProduct } from './generic-abstract-product';


export abstract class GenericAbstractService<T>
    extends AbstractService
    implements NGenPattern.Creational.AbstractFactory.GenericAbstractFactory<T> {

    private factoryClient: NGenPattern.Creational.AbstractFactory
        .GenericFactoryClient<T>;

    constructor() {
        super();
        this.factoryClient = new NGenPattern.Creational.AbstractFactory
            .GenericFactoryClient(this);
    }

    abstract manufacture(object: Object): GenericAbstractProduct<T>;

    protected readProduct(url: string, options?: Object):
        Promise<NGenPattern.Creational.AbstractFactory.GenericAbstractProduct<T> |
        Array<NGenPattern.Creational.AbstractFactory.GenericAbstractProduct<T>>> {

        return new Promise(
            (accomplish: Function, reject: Function) => {
                super.get(url, options).then(
                    (r: any) => {
                        if (r && typeof r == 'object') {
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
                super.search(url, params, options).then(
                    (r: Array<Object>) => {
                        accomplish(this.factoryClient
                            .manufactureCollection(r));
                    }
                ).catch(
                    e => {
                        reject(e);
                    }
                )
            }
        );
    }

}
