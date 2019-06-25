import { AbstractSend } from '../send/abstract-send';


export class Send {

    constructor(
        private strategy?: AbstractSend
    ) { }

    send(url: string, data: Object, options?: Object): Promise<Response> {
        return this.strategy.send(url, data, options);
    }

}
