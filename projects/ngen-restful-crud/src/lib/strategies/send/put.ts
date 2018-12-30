import { AbstractSend } from './abstract-send';


export class Put extends AbstractSend {

    send(url: string, data: Object, options?: Object): Promise<Response> {
        return super.send(url, data, options, 'put');
    }

}
