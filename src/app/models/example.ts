// import { NGenCRUDRequester } from 'ngen-crud-requester';
import { NGenCRUDRequester } from 'projects/ngen-crud-requester/src/public_api';


export class Example implements NGenCRUDRequester.GenericAbstractProduct<Example>  {

    constructor(object: Object = {}) { }

    getConcrete(): Example {
        return this;
    }

}
