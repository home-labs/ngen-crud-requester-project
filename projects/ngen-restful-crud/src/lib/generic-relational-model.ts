export abstract class GenericRelationalModel<T> {

    private id: number;

    constructor(attrs: Object = {}) {
        this.id = attrs['id'];
    }

    getId(): number {
        return this.id;
    }

}
