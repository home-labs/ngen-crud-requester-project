import { AbstractSend } from './abstract-send';


export class Put extends AbstractSend {

    send(url: string, data: object, options?: object): Promise<Response> {
        return super.send(url, data, options, 'put') as Promise<Response>;
    }

}
