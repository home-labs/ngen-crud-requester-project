import { GenericAbstractProduct } from "./generic-abstract-product";

export abstract class GenericAbstractRelationalModel<T> implements GenericAbstractProduct<T> {

    private id: number;

    constructor(attrs: Object = {}) {
        this.id = attrs['id'];
    }

    getId(): number {
        return this.id;
    }

    abstract getConcrete(): T;

}
