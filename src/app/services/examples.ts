import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// import { NGenCRUDRequester } from 'projects/ngen-crud-requester/src/public_api';
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
    //     console.log(http);
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

    search(params: Object, options?: Object): Promise<Object[]> {
        return super.search(`
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


// senhores, boa tarde.Eu já havia comentado por alto com o Reina.Sei que hoje é domingo, dia de estar com a família e descansar, mas não há dia para vir soluções à nossa cabeça e a pormos em prática.
// Eu me deparei com um bug no Angular, fui pesquisar, e outras pessoas relataram a mesma coisa.Explico: até a versão 6 do Angular, ao a injeção de dependência do objeto do tipo HttpClient quando o projeto é estartado com a flag--prod(scripts minificados, instruções debugger removidas, etc.), não funciona.Na versão 7, última versão estável do Angular, isso foi corrigido.Já testei em casa e constatei.
// Portanto temos um problema que, por enquanto, só consegui enxergar duas soluções:
// 1 - atualizar o angular para a última versão estável;
// 2 - injetar o HttpClient no constructor da classe que leva o decorator @NgModule e disponibilizá - lo de forma global;

// Caso optemos pela opção 2, teremos de modificar TODOS as services para que, ao invés de injetar o HttpClient no constructor de cada uma classe service(que leva o decorator @Injectable), importar uma referência singlelton de HttpClient que será definida em AppModule(ou seja, o módulo principal do projeto, um módulo Angular, isto é, que possui o decorator @NgModule instruído no código)
