import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

import { NGenCRUDRequester } from '@actjs.on/ngen-crud-requester';
// import { NGenCRUDRequester } from 'projects/ngen-crud-requester/ngen-crud-requester';

// @Injectable()
// class ConcreteHttpInterceptor implements HttpInterceptor {

//     intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         // console.log(req.urlWithParams);
//         return next.handle(request);
//     }

// }

@Injectable()
export class Examples extends NGenCRUDRequester.AbstractCRUDService<object> {

    // use a constructor will break the dependency injection chain
    // constructor(
    //     http: HttpClient
    // ) {
    //     super();
    //     console.log(http);
    // }

    // createProxy(data: object, options?: object): Promise<Response> {
    //     return super.create(`

    //     `, data, options);
    // }

    // getOne(id: number, options?: object): Promise<object> {
    //     return super.read(`

    //     `, options);
    // }

    // readCollection(id: number, options?): Promise<object> {
    //     // just changes the URL
    //     return super.read(`

    //     `, options);
    // }

    // to overload (same name but different signature) you can use <original type> [| <... new types>]
    read(): Promise<object> {
        return super.read(`
            https://servicodados.ibge.gov.br/api/v1/localidades/estados
        `);
    }

    // updateProxy(id: number, params: object, options?: object): Promise<Response> {
    //     // return super.put(`
    //     return super.update(`

    //     `, params, options);
    // }

    // deleteProxy(id: number, options?: object): Promise<Response> {
    //     return super.delete(`

    //     `, options);
    // }

}
