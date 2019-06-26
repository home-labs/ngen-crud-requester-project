import { Injectable } from '@angular/core';

// import { NGenCRUDRequester } from 'projects/ngen-crud-requester/src/public_api';
import { NGenCRUDRequester } from 'ngen-crud-requester';

// import { Example } from '../models/example';


@Injectable()
export class Examples
                        // extends NGenCRUDRequester.GenericAbstractService<Example> {
                        extends NGenCRUDRequester.GeneralService {

    // use a constructor will break the dependency injection chain
    // constructor(

    // ) {
    //     super();
    // }

    // manufacture(response: Response): NGenCRUDRequester.GenericAbstractProduct<Example> {
    //     return new Example(response);
    // }

    // create(data: Object, options?): Promise<Response> {
    //     return super.create(`

    //     `, data, options);
    // }

    // read(id: number, options?): Promise<Object> {
    //     return super.get(`

    //     `, options);
    // }

    // readCollection(id: number, options?): Promise<Object> {
    //     // just changes the URL
    //     return super.get(`

    //     `, options);
    // }

    searchProxy(params: Object, options?: Object): Promise<Object[]> {
        // return this._service.search(`
        return this.search(`
            https://servicodados.ibge.gov.br/api/v1/localidades/estados
        `, params, options);
    }

    // update(id: number, params: Object, options?: Object): Promise<Response> {
    //     // return super.put(`
    //     return super.patch(`

    //     `, params, options);
    // }

    // delete(id: number, options?: Object): Promise<Response> {
    //     return super.destroy(`

    //     `, options);
    // }

}
