import { AbstractSend } from '../send/abstract-send';


export class Send {

    constructor(
        private strategy: AbstractSend
    ) { }

    send(url: string, data: object, options?: object): Promise<Response> {
        return this.strategy.send(url, data, options);
    }

}
