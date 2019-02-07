import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NGenRESTfulCRUD } from '../../../projects/ngen-restful-crud/src/public_api';


@Injectable()
export class Examples extends NGenRESTfulCRUD.AbstractService {

    constructor(
        http: HttpClient
    ) {
        super(http);
    }

    create(data: Object, options?): Promise<Response> {
        return super.create(`

        `, data, options);
    }

    read(id: number, options?): Promise<Object> {
        return super.get(`

        `, options);
    }

    readCollection(id: number, options?): Promise<Object> {
        // just changes the URL
        return super.get(`

        `, options);
    }

    search(params: Object, options?: Object): Promise<Array<Object>> {
        return super.search(`
            https://servicodados.ibge.gov.br/api/v1/localidades/estados
        `, params, options);
    }

    update(id: number, params: Object, options?: Object): Promise<Response> {
        // return super.put(`
        return super.patch(`

        `, params, options);
    }

    delete(id: number, options?: Object): Promise<Response> {
        return super.destroy(`

        `, options);
    }

}
