import { NGenCRUDRequest } from 'ngen-crud-request';


export class Example implements NGenCRUDRequest.GenericAbstractProduct<Example>  {

    constructor(object: Object = {}) { }

    getConcrete(): Example {
        return this;
    }

}
