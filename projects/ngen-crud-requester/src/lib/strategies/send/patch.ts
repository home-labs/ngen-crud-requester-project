import { AbstractSend } from './abstract-send';


export class Patch extends AbstractSend {

    send(url: string, data: object, options?: object): Promise<Response> {
        return super.send(url, data, options, 'patch') as Promise<Response>;
    }

}
