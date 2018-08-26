import { HttpClient } from '@angular/common/http';

import { AbstractService } from './abstract-service';

import { NGenPattern } from 'ngen-pattern';
import { GenericAbstractProduct } from './generic-abstract-product';


export abstract class GenericAbstractService<T>
    extends AbstractService
    implements NGenPattern.Creational.AbstractFactory.GenericAbstractFactory<T> {

    private factoryClient: NGenPattern.Creational.AbstractFactory.GenericFactoryClient<T>;

    constructor(
        http: HttpClient
    ) {
        super(http);
        this.factoryClient = new NGenPattern.Creational.AbstractFactory.GenericFactoryClient(this);
    }

    abstract manufacture(response: Response): GenericAbstractProduct<T>;

    protected readProduct(url: string, options?): Promise<NGenPattern.Creational.AbstractFactory.GenericAbstractProduct<T>> {

        return new Promise((accomplish, reject) => {
            super.get(url, options).then(
                (r: Response) => {
                    accomplish(this.factoryClient.manufacture(r));
                }
            ).catch(
                (e) => {
                    reject(e);
                }
            );
        });
    }

    protected searchProduct(url: string, data: Object, options?): Promise<Array<NGenPattern.Creational.AbstractFactory.GenericAbstractProduct<T>>> {
        return new Promise(
            (accomplish, reject) => {
                super.search(url, data, options).then(
                    (r: Array<Object>) => {
                        accomplish(this.factoryClient.manufactureCollection(r));
                    }
                ).catch(
                    (e) => {
                        reject(e);
                    }
                )
            }
        );
    }

}
