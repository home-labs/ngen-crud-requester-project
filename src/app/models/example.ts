import { NGenRESTfulCRUD } from 'ngen-restful-crud';


export class Example implements NGenRESTfulCRUD.GenericAbstractProduct<Example>  {

    constructor(object: Object = {}) { }

    getConcrete(): Example {
        return this;
    }

}
