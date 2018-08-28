import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NGenRESTfulCRUD } from 'ngen-restful-crud';


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

    search(params: Object, options?): Promise<Array<Object>> {
        return super.search(`

        `, params, options);
    }

    update(id: number, data: Object, options?: Object): Promise<Response> {
        // return super.put(`
        return super.patch(`

        `, data, options);
    }

    delete(id: number, options?: Object): Promise<Object> {
        return super.destroy(`

        `, options);
    }

}
