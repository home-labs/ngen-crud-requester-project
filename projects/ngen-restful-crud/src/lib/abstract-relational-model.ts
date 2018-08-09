import { GenericAbstractProduct } from "./generic-abstract-product";


export abstract class AbstractRelationalModel implements GenericAbstractProduct<AbstractRelationalModel> {

    private id: number;

    constructor(attrs: Object = {}) {
        this.id = attrs['id'];
    }

    getId(): number {
        return this.id;
    }

    getConcrete(): AbstractRelationalModel {
        return this;
    }

}
