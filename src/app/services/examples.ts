import { Injectable } from '@angular/core';

import { NGenCRUDRequest } from 'ngen-crud-request';

import { Example } from '../models/example';


@Injectable()
export class Examples
                        // extends NGenCRUDRequest.GenericAbstractService<Example>
{
    private _service: NGenCRUDRequest.GeneralService

    constructor(
        service: NGenCRUDRequest.GeneralService
    ) {
        // super(service);
        this._service = service;
    }

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

    search(params: Object, options?: Object): Promise<Array<Object>> {
        return this._service.search(`
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
