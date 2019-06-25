import { Injectable } from '@angular/core';

// import { NGenCRUDRequest } from 'ngen-crud-request';
import { NGenCRUDRequest } from 'projects/ngen-crud-request/src/public_api';

// import { Example } from '../models/example';


@Injectable()
export class Examples
                        // extends NGenCRUDRequest.GenericAbstractService<Example> {
                        extends NGenCRUDRequest.GeneralService {

    // use a constructor will break the dependency injection chain
    // constructor(

    // ) {
    //     super();
    // }

    // manufacture(response: Response): NGenCRUDRequest.GenericAbstractProduct<Example> {
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
