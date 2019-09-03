import { AbstractSend } from './abstract-send';


export class Post extends AbstractSend {

    send(url: string, data: object, options?: object): Promise<Response> {
        return super.send(url, data, options, 'post');
    }

}
