import { NGenRESTfulCRUD } from 'ngen-crud-request';


export class Example implements NGenRESTfulCRUD.GenericAbstractProduct<Example>  {

    constructor(object: Object = {}) { }

    getConcrete(): Example {
        return this;
    }

}
