import { Injectable } from '@angular/core';

import { AbstractSend } from './abstract-send';


@Injectable()
export class Patch extends AbstractSend {

    send(url: string, data: object, options?: object): Promise<Response> {
        return super.send(url, data, options, 'patch');
    }

}
