import { AbstractSend } from './abstract-send';


export class Post extends AbstractSend {

    send(url: string, data: object, options?: object): Promise<Response | object[]> {
        return super.send(url, data, options, 'post');
    }

}
