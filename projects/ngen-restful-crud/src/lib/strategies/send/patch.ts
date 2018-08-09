import { AbstractSend } from './abstract-send';


export class Patch extends AbstractSend {

    send(url: string, data: Object, options?): Promise<Response> {
        return super.send(url, data, options, 'patch');
    }

}
