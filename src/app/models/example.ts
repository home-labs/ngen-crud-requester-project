// import { NGenCRUDRequest } from 'ngen-crud-requester';
import { NGenCRUDRequest } from 'projects/ngen-crud-requester/src/public_api';


export class Example implements NGenCRUDRequest.GenericAbstractProduct<Example>  {

    constructor(object: Object = {}) { }

    getConcrete(): Example {
        return this;
    }

}
