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

    read(id: number, options?): Promise<Response> {
        return super.get(`

        `, options);
    }

    search(data: Object, options?): Promise<Response> {
        return super.search(`

        `, data, options);
    }

    update(id: number, data: Object, options?: Object): Promise<Response> {
        // return super.put(`
        return super.patch(`

        `, data, options);
    }

    delete(id: number, options?: Object): Promise<Response> {
        return super.destroy(`

        `, options);
    }

}
