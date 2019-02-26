import { Injectable } from '@angular/core';

import { NGenRESTfulCRUD } from 'ngen-restful-crud';

import { Example } from '../models/example';


@Injectable()
export class Examples
                        // extends NGenRESTfulCRUD.GenericAbstractService<Example>
{
    private _service: NGenRESTfulCRUD.GeneralService

    constructor(
        service: NGenRESTfulCRUD.GeneralService
    ) {
        // super(service);
        this._service = service;
    }

    // manufacture(response: Response): NGenRESTfulCRUD.GenericAbstractProduct<Example> {
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
