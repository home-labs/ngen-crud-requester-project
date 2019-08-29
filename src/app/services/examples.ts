import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

import { NGenCRUDRequester } from 'ngen-crud-requester';

// @Injectable()
// class ConcreteHttpInterceptor implements HttpInterceptor {

//     intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         // console.log(req.urlWithParams);
//         return next.handle(request);
//     }

// }

@Injectable()
export class Examples extends NGenCRUDRequester.GeneralService {

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

    // TypeScript doesn't support overload because Javascript haven't type, so a function declared later would overwrite the previous one
    // even if the signature is different and the parameters are optional
    getAll(params: object, options?: object): Promise<object[]> {
        return super.search(`
            https://servicodados.ibge.gov.br/api/v1/localidades/estados
        `, params, options);
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
