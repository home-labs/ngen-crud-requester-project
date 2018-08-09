import { AbstractSend } from './abstract-send';


export class Post extends AbstractSend {

    send(url: string, data: Object, options?): Promise<Response> {
        return super.send(url, data, options, 'post');
    }

}
